const express = require('express');
const routes = express.Router();
require('dotenv/config');
const verifytoken = require('./services/verifytoken');

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
routes.post('/mercadorias', verifytoken, mercadoriasController.Create);
routes.get('/mercadorias', mercadoriasController.Index);
routes.put('/mercadorias/:id', verifytoken, mercadoriasController.Update);
routes.delete('/mercadorias/:id', verifytoken, mercadoriasController.Delete);

//Vendedores
routes.post('/vendedores', verifytoken, vendedorController.Create);
routes.get('/vendedores', vendedorController.Index);
routes.put('/vendedores/:id', verifytoken, vendedorController.Update);
routes.delete('/vendedores/:id', verifytoken, vendedorController.Delete);

//Vendas
routes.post('/vendas', vendasController.Create);
routes.get('/vendas', vendasController.Index);
routes.put('/vendas/:id', verifytoken, vendasController.Update);
routes.delete('/vendas/:id', verifytoken, vendasController.Delete);


  
module.exports = routes;