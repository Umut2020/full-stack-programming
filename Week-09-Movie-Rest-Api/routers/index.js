var express = require('express')
var app = express()

let movieList = [
  {
    'id': 10002,
    'name': 'die hard',
    'year': '1999',
    'genre': 'action',
    'income': 10000000
  }

]

let rentList = [
  {
    'movieId': 10002,
    'duration': 10,
    'person': 'Hi Coders'
  }
]

var server = app.listen(3000, function () {
  console.log('sunucu calisiyor')
})

app.get('/movies', function (req, res) {
  let movies = JSON.parse(JSON.stringify(movieList))
  res.json(movies)
})
app.get('/movies/:id', function (req, res) {
  res.end(id)
})
app.post('/movies', function (req, res) {
  movieList.push(req.body)
  console.log(req.body)
  res.sendStatus(200)
})
app.put('/movies/:id', function (req, res) {
  res.end('filmler geliyor mu ?')
})
app.delete('/movies/:id', function (req, res) {
  res.end('filmler geliyor mu ?')
})
app.get('/rents', function (req, res) {
  let rents = JSON.parse(JSON.stringify(rentList))
  res.json(rents)
})
app.post('/rents', function (req, res) {
  rentList.push(req.body)
  res.sendStatus(200)
})

// /* GET home page. */
// router.get('/employees/', function(req, res, next) {
//     let newArray = JSON.parse(JSON.stringify(personList))
//     let list = newArray.reverse().filter( (o, i) => i<20)
//     res.json(list)
//   })

//   router.post('/employees/', function(req, res, next) {
//     personList.push(req.body)
//     res.sendStatus(200)
//   })

//   module.exports = router
