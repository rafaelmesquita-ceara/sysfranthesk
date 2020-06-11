const express = require('express');
const routes = express.Router();
require('dotenv/config')

//Test
routes.use('/', (req, res)=> res.json({"APP" : process.env.APP_NAME,
  "Version" : process.env.APP_VERSION,
  "State" : process.env.NODE_ENV}))



  
module.exports = routes;