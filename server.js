// Setup
require('dotenv').config()
var knexConfig = require('./knexfile.js')
var knex = require('knex')(knexConfig)
var express = require('express')
var app = express()

app.get('/detail', function(req,res){
  if (!req.query.id) {
    res.redirect('index.html')
  } else {
    res.render('detail', {query: req.query.id})
  }
})

// API Routes
app.get('/api/v1/portfolio', function(req, res){
  knex
    .select()
    .from('portfolio')
    .then(function(data){
      res.json(data)
    })
})

app.get('/api/v1/detail', function(req, res){
  knex
    .select()
    .from('portfolio')
    .where({id: req.query.id})
      .then(function(data){
        res.json(data)
      })
})

// Start
app.set('port', (process.env.PORT || 5000))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function () {
  console.log('Example app listening on port', app.get('port'))
  console.log('Press Ctrl+C to stop.')
})
