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

	let date_str = new Date();
	let get_month = parseInt(date_str.getMonth());
	let year = parseInt(date_str.getFullYear());
	let month = get_month + 1;
	month = month < 10 ? '0' + month : month;
	let date = date_str.getDate() < 10 ? '0' + date_str.getDate() : date_str.getDate();

	base('Contact form').create([
		{
			"fields": {
				'Name': req.body.name,
				'Email': req.body.email,
				'Details': req.body.details,
				'Date': month+'.'+date+'.'+year,
			}
		},
	], function (err) {
		if (err) {
			console.error(err);
			return;
		}
		res.json({"success": "true"})
	});

})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)
