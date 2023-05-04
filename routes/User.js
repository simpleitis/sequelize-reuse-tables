const express = require('express')
const router = express.Router()
const { Users } = require('../models')

router.get('/', async (req, res) => {
    const listOfUsers = await Users.findAll()

    res.json({ listOfUsers: listOfUsers })
})

router.post('/', async (req, res) => {
    const user = req.body

    try {
        await Users.create(user)
        res.json(user)
    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router
