const express = require('express')
const router = express.Router()
const knex = require('../knex')
const Joi = require('joi')

/* Validates the user's ID */
const validateUserID = (req, res, next) => {
  knex('users_quizzes').where('id', req.params.id).then(([data]) => {
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
    user_id: Joi.number().integer().required(),
    quiz_id: Joi.number().integer().required()
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
    user_id: Joi.number().integer().required(),
    quiz_id: Joi.number().integer().required()
  })

  const { error } = Joi.validate(req.body, patchSchema)
  if (error) {
    return res.status(400).json({ "PATCH Schema Error": { message: error.details[0].message } })
  }

  const allowedPatchKeys = [user_id, quiz_id]

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

/* GET all users_quizzes record */
router.get('/', (req, res, next) => {
  knex('users_quizzes').then(data => res.status(200).json(data)).catch(err => next(err))
})

/* GET single users_quizzes record */
router.get('/:id', validateUserID, (req, res, next) => {
  knex('users_quizzes').where('id', req.params.id).then(([data]) => res.status(200).json(data)).catch(err => next(err))
})

/* POST new users_quizzes record */
router.post('/', validatePostBody, (req, res, next) => {
  const {id, user_id, quiz_id} = req.body

  knex('users_quizzes').insert({id, user_id, quiz_id}).returning('*').then(([data]) => res.status(201).json(data)).catch(err => next(err))
})

/* PATCH specified users_quizzes record */
router.patch('/:id', validateUserID, buildPatchReq, (req, res, next) => {
  const {patchReq} = req

  knex('users_quizzes').where('id', req.params.id).first().update(patchReq).returning('*').then(([data]) => {
    res.status(200).json(data)
  }).catch(err => next(err))
})

/* DELETE specified users_quizzes record */
router.delete('/:id', validateUserID, (req, res, next) => {
  knex('users_quizzes').where('id', req.params.id).first().del().returning('*').then(([data]) => {
    console.log('deleted', data)
    res.status(200).json({deleted: data})
  })
})

module.exports = router
