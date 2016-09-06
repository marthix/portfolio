// Setup
var port = 8000
var knexConfig = require('./knexfile.js')
var knexDatabase = require('knex')(knexConfig)
var express = require('express')
var app = express()

// Routes
app.get('/api/v1/portfolio', function(req, res){
  knexDatabase
    .select()
    .from('portfolio')
    .then(function(data){
      res.json(data)
    })
})

// Start
app.use(express.static('public'))

app.listen(port, function () {
  console.log('Web server on http://localhost:' + port)
  console.log('Press Ctrl+C to stop.')
})
