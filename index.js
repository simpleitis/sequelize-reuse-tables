const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

// Routers
const newsieRouter = require('./routes/Newsie.js')
app.use('/newsie', newsieRouter)

const userRouter = require('./routes/User.js')
app.use('/user', userRouter)

const groupRouter = require('./routes/Group.js')
app.use('/group', groupRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    })
})
