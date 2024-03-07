express = require('express')

app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  res.sendFile(__dirname + '/index.css')
  res.sendFile(__dirname + '/index.js')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
