const mongoose = require('mongoose');
const Product = require('../models/products');

mongoose.connect('mongodb+srv://brinquedo:brinquedo2019@cluster0-auved.gcp.mongodb.net/test?retryWrites=true&w=majority/loja', 
{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado ao banco de dados');
});

class produtos {
  static allProducts (req,res){
      Product.find((err, products)=>{
        if(err) return console.error(err);
        res.send(products);
      })
  }

};

module.exports = {
  db:produtos
}