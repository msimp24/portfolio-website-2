const express = require('express')
const router = express.Router()

const { data, projectDetails } = require('../data/project-data')
const { sendContactEmail } = require('../services/emailService')

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
router.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(409).json({ error: 'Missing required input fields' })
  }

  try {
    await sendContactEmail(email, subject, firstName, lastName, message)

    return res
      .status(200)
      .json({ message: `Email sent from ${firstName} ${lastName}` })
  } catch (error) {
    console.error('Send email error:', error)
    return res.status(500).json({ error: 'Failed to send message' })
  }
})

module.exports = router
