const express = require('express');
const router = express.Router();
const { db } = require('./controllers/db');

router.get('/allproducts', db.allProducts);

module.exports=router;