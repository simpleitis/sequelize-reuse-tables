const express = require('express')
const router = express.Router()
const { Newsies } = require('../models')

router.get('/', async (req, res) => {
    const listOfNewsies = await Newsies.findAll()

    res.json({ listOfNewsies: listOfNewsies })
})

router.post('/', async (req, res) => {
    const newsie = req.body

    try {
        await Newsies.create(newsie)
        res.json(newsie)
    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router
