const express = require('express');
const router = express.Router();
const { db, adm } = require('./controllers/db');

router.get('/allproducts', db.allProducts);
//controle do dashboard
router.post('/insertproduct', adm.insertProduct);
router.delete('/deleteproduct', adm.deleteProduct);
router.post('/insertcategoria', adm.insertCategoria);
router.delete('/deletecategoria', adm.deleteCategoria);
router.get('/getcategoria', adm.getCategorias);


module.exports=router;