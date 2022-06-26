const express = require('express')

const contact_us = require('./routes/contact-us')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(contact_us)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
