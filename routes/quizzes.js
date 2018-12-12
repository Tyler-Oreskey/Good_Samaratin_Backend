const express = require('express')
const router = express.Router()
const knex = require('../knex')
const Joi = require('joi')

/* Validates the user's ID */
const validateUserID = (req, res, next) => {
  knex('quizzes').where('id', req.params.id).then(([data]) => {
    if (!data) {
      return res.status(400).json({
        error: {
          message: `User ID ${req.params.id} not found`
        }
      })
    }
    next()
  })
}

/* Uses joi to validate data types */
const validatePostBody = (req, res, next) => {
  const postSchema = Joi.object().keys({
    question: Joi.string().required(),
    correct_answer: Joi.string().required(),
    wrong_answer_one: Joi.string().required(),
    wrong_answer_two: Joi.string().required(),
    wrong_answer_three: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string()
  })

  const { error } = Joi.validate(req.body, postSchema)

  if (error) {
    return res.status(400).json({ "POST Schema Error": { message: error.details[0].message } })
  }
  next()
}

/* Uses joi to build a patch request */
const buildPatchReq = (req, res, next) => {
  const patchSchema = Joi.object().keys({
    question: Joi.string().required(),
    correct_answer: Joi.string().required(),
    wrong_answer_one: Joi.string().required(),
    wrong_answer_two: Joi.string().required(),
    wrong_answer_three: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string()
  })

  const { error } = Joi.validate(req.body, patchSchema)
  if (error) {
    return res.status(400).json({ "PATCH Schema Error": { message: error.details[0].message } })
  }

  const allowedPatchKeys = [question, correct_answer, wrong_answer_one. wrong_answer_two, wrong_answer_three, description, type]

  // Constructs the patch request object
  let patchReq = {}
  allowedPatchKeys.forEach(key => {
    if (req.body.hasOwnProperty(key)) { patchReq[key] = req.body[key] }
  })

  // If the patch request is empty or has invalid key names, return an error
  if (Object.keys(patchReq).length === 0) {
    return res.status(400).json({ error: { message: `Empty or invalid patch request` } })
  }

  // Every patch update will create a new 'updated_at' timestamp
  patchReq.updated_at = new Date()

  // Stores the patch request-object into next request
  req.patchReq = patchReq
  next()
}

/* GET all quizzes record */
router.get('/', (req, res, next) => {
  knex('quizzes').then(data => res.status(200).json(data)).catch(err => next(err))
})

/* GET single quizzes record */
router.get('/:id', validateUserID, (req, res, next) => {
  knex('quizzes').where('id', req.params.id).then(([data]) => res.status(200).json(data)).catch(err => next(err))
})

/* POST new quizzes record */
router.post('/', validatePostBody, (req, res, next) => {
  const {id, question, correct_answer, wrong_answer_one, wrong_answer_two, wrong_answer_three, description, type} = req.body

  knex('quizzes').insert({id, question, correct_answer, wrong_answer_one, wrong_answer_two, wrong_answer_three, description, type}).returning('*').then(([data]) => res.status(201).json(data)).catch(err => next(err))
})

/* PATCH specified quizzes record */
router.patch('/:id', validateUserID, buildPatchReq, (req, res, next) => {
  const {patchReq} = req

  knex('quizzes').where('id', req.params.id).first().update(patchReq).returning('*').then(([data]) => {
    res.status(200).json(data)
  }).catch(err => next(err))
})

/* DELETE specified quizzes record */
router.delete('/:id', validateUserID, (req, res, next) => {
  knex('quizzes').where('id', req.params.id).first().del().returning('*').then(([data]) => {
    console.log('deleted', data)
    res.status(200).json({deleted: data})
  })
})

module.exports = router
