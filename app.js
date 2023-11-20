const express = require('express')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('./config/passport')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(methodOverride('_method'))
app.use(session({ secret: 'SESSION_SECRET', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app
