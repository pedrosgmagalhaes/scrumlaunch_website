const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(express.json())

var Airtable = require('airtable')
var base = new Airtable({ apiKey: 'keyDtp2haFcTkKWFh' }).base('appPamHyC1Fm0g2mx')

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})


app.post('/contact-us', (req, res) => {

	base('Contact form').create([
		{
			"fields": {
				'Name': req.body.name,
				'Email': req.body.email,
				'Details': req.body.details,
			}
		},
	], function (err, records) {
		if (err) {
			console.error(err);
			return;
		}
		res.json({'success': true})
	});

})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)
