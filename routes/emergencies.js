const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* Validates the user's ID */
const validateUserID = (req, res, next) => {
  knex('emergencies').where('id', req.params.id).then(([data]) => {
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

/* GET all emergencies record */
router.get('/', (req, res, next) => {
  knex('emergencies').then(data => res.status(200).json(data)).catch(err => next(err))
})

/* GET single emergencies record */
router.get('/:id', validateUserID, (req, res, next) => {
  knex('emergencies').where('id', req.params.id).then(([data]) => res.status(200).json(data)).catch(err => next(err))
})

/* POST new emergencies record */
router.post('/', validatePostBody, (req, res, next) => {
  const {id, emergency_name, emergency_type} = req.body

  knex('emergencies').insert({id, emergency_name, emergency_type}).returning('*').then(([data]) => res.status(201).json(data)).catch(err => next(err))
})

/* PATCH specified emergencies record */
router.patch('/:id', validateUserID, buildPatchReq, (req, res, next) => {
  const {patchReq} = req

  knex('emergencies').where('id', req.params.id).first().update(patchReq).returning('*').then(([data]) => {
    res.status(200).json(data)
  }).catch(err => next(err))
})

/* DELETE specified emergencies record */
router.delete('/:id', validateUserID, (req, res, next) => {
  knex('emergencies').where('id', req.params.id).first().del().returning('*').then(([data]) => {
    console.log('deleted', data)
    res.status(200).json({deleted: data})
  })
})

module.exports = router
