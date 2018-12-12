const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* Validates the user's ID */
const validateUserID = (req, res, next) => {
  knex('emergencies_procedures').where('id', req.params.id).then(([data]) => {
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

/* GET all goal/task record */
router.get('/', (req, res, next) => {
  knex('emergencies_procedures').then(data => res.status(200).json(data)).catch(err => next(err))
})

/* GET single goal/task record */
router.get('/:id', validateUserID, (req, res, next) => {
  knex('emergencies_procedures').where('id', req.params.id).then(([data]) => res.status(200).json(data)).catch(err => next(err))
})

/* POST new goal/task record */
router.post('/', validatePostBody, (req, res, next) => {
  const {goal_id, task_id} = req.body

  knex('emergencies_procedures').insert({goal_id, task_id}).returning('*').then(([data]) => res.status(201).json(data)).catch(err => next(err))
})

/* PATCH specified goal/task record */
router.patch('/:id', validateUserID, buildPatchReq, (req, res, next) => {
  const {patchReq} = req

  knex('emergencies_procedures').where('id', req.params.id).first().update(patchReq).returning('*').then(([data]) => {
    res.status(200).json(data)
  }).catch(err => next(err))
})

/* DELETE specified monsters record */
router.delete('/:id', validateUserID, (req, res, next) => {
  knex('emergencies_procedures').where('id', req.params.id).first().del().returning('*').then(([data]) => {
    console.log('deleted', data)
    res.status(200).json({deleted: data})
  })
})

module.exports = router
