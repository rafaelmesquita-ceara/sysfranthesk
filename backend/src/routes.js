const express = require('express');
const routes = express.Router();
require('dotenv/config')

//Controllers imports
const mercadoriasController = require('./controllers/mercadoriasController')
const vendasController = require('./controllers/vendasController')
const caixaController = require('./controllers/caixaController')
const vendedorController = require('./controllers/vendedorController')
const contasController = require('./controllers/contasController')

//Test
routes.get('/', (req, res)=> res.json({"APP" : process.env.APP_NAME,
  "Version" : process.env.APP_VERSION,
  "State" : process.env.NODE_ENV}));

//Mercadorias
routes.post('/mercadorias', mercadoriasController.Create);
routes.get('/mercadorias', mercadoriasController.Index);
routes.put('/mercadorias/:id', mercadoriasController.Update);
routes.delete('/mercadorias/:id', mercadoriasController.Delete);



  
module.exports = routes;