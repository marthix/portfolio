// Setup
var knexConfig = require('./knexfile.js')
var knexDatabase = require('knex')(knexConfig)
var express = require('express')
var app = express()


// Routes
app.get('/api/v1/portfolio', function(req, res){
  console.log(req)
  knexDatabase
    .select()
    .from('portfolio')
    .then(function(data){
      res.json(data)
    })
})

// Start
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function () {
  console.log('Example app listening on port', app.get('port'))
  console.log('Press Ctrl+C to stop.')
})
