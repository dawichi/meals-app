const express = require('express')
const Meals = require('../models/Meals')

const router = express.Router()

// GET list
router.get('/', (req, res) => {
	Meals.find()
		.exec()
		.then(x => res.status(200).send(x))
})

// GET 1 element
router.get('/:id', (req, res) => {
	Meals.findById(req.params.id)
		.exec()
		.then(x => res.status(200).send(x))
})

// create an element
router.post('/', (req, res) => {
	Meals.create(req.body).then(x => res.status(201).send(x))
})

// update an element - // note that we dont send back the data, because the user already has it
router.put('/:id', (req, res) => {
	Meals.findOneAndUpdate(req.params.id, req.body)
		.then(() => res.sendStatus(204))
})

// DELETE 1 element
router.delete('/:id', (req, res) => {
	Meals.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router