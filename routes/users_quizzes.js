const express = require('express')
const router = express.Router()
const knex = require('../knex')

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
