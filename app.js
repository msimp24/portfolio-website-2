const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const path = require('path')

app.use(express.json())

app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.set('layout', 'layouts/layout')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

const routes = require('./routes/staticRoutes')
app.use('/', routes)

module.exports = app
