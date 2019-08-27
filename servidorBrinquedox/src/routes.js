const express = require('express');
const router = express.Router();
const { db, adm, all } = require('./controllers/db');

router.get('/allproducts', (req,res)=>{all.get(req,res,"produtos")});
router.post('/newuser', db.newUser);

//controle do dashboard
router.post('/insertproduct', adm.insertProduct);
router.post('/insertcategoria', adm.insertCategoria);

router.delete('/deleteproduct', adm.deleteProduct);
router.delete('/deleteuser', adm.deleteUser);
router.delete('/deletecategoria', adm.deleteCategoria);

router.get('/getcategoria',  (req,res)=>{all.get(req,res,"categorias")});
router.get('/getusers',  (req,res)=>{all.get(req,res,"usuarios")});

router.put('/updateuser',adm.putUser);
router.put('/updateproduct',adm.putProduct);
router.put('/updatecategoria',adm.putCategoria);



module.exports=router;