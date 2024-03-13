express = require('express')

app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/home/index.html')
  res.sendFile(__dirname + '/home/index.css')
  res.sendFile(__dirname + '/index.js')
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
