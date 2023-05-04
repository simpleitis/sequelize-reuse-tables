const express = require('express')
const router = express.Router()
const { Groups } = require('../models')

router.get('/', async (req, res) => {
    const listOfGroups = await Groups.findAll()

    res.json({ listOfGroups: listOfGroups })
})

router.post('/', async (req, res) => {
    const group = req.body

    try {
        await Groups.create(group)
        res.json(group)
    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router
