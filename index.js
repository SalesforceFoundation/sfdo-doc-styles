const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/node_modules/@salesforce-ux/design-system/assets'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/build/index.html');
});

console.log('Served: http://localhost:' + port);
app.listen(port);
