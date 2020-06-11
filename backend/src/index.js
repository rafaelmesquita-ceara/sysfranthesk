//const routes = require('./routes');
var express = require('express');
const app = express();
var http = require('http').createServer(app);
require('dotenv/config');

app.use(express.json());
//app.use(routes);
http.listen(process.env.APP_PORT, () => {
  console.log(`Projeto ${process.env.APP_NAME}`)
  console.log(`Porta ${process.env.APP_PORT}`)
});


