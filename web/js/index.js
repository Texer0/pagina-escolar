const express = require('express')

app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/paginas/home/index.html')
  res.sendFile(__dirname + '/paginas/home/index.css')
  res.sendFile(__dirname + '/index.js')
})

// app.get('/datos', function(req, res) {
//   res.sendFile(__dirname + '/paginas/datos/datos.html')
//   res.sendFile(__dirname + '/paginas/datos/datos.css')
//   res.sendFile(__dirname + '/index.js')
// })

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

document.getElementsByName("input", function() {
  res.sendFile(__dirname + '/paginas/datos/datos.html')
})