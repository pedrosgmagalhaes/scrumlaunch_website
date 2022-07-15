const { Router } = require('express')
const router = Router()

const Airtable = require('airtable')
const base = new Airtable({ apiKey: 'keyDtp2haFcTkKWFh' }).base(
  'appPamHyC1Fm0g2mx'
)

router.post('/contact-us', (req, res) => {
  const date_str = new Date()
  const get_month = parseInt(date_str.getMonth())
  const year = parseInt(date_str.getFullYear())
  let month = get_month + 1
  month = month < 10 ? '0' + month : month
  const date =
    date_str.getDate() < 10 ? '0' + date_str.getDate() : date_str.getDate()

  base('Contact form').create(
    [
      {
        fields: {
          Name: req.body.name,
          Email: req.body.email,
          Details: req.body.details,
          Date: month + '.' + date + '.' + year,
          cv_attachment: req.body.cv_attachment,
        },
      },
    ],
    function (err) {
      if (err) {
        console.error(err)
        return
      }
      res.status(201).json({ success: true })
    }
  )
})

module.exports = router