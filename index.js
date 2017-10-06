var express = require('express')
var path = require('path')
var app = express()
var port = 3000 || process.env.PORT

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.listen(port);