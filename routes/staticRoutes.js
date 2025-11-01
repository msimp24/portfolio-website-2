const express = require('express')
const router = express.Router()

const { data, projectDetails } = require('../data/project-data')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/contact', (req, res) => {
  res.render('contact')
})

router.get('/projects', (req, res) => {
  res.render('projects', { projects: data })
})

router.get('/projects/:slug', (req, res) => {
  const slug = req.params.slug

  const details = projectDetails.find((detail) => detail.slug === slug)
  console.log(details)

  res.render('project-details', { project: details })
})

module.exports = router
