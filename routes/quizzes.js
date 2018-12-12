const express = require('express')
const router = express.Router()
const knex = require('../knex')

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
