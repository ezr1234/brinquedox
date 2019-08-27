var MongoClient = require('mongodb').MongoClient;

const newuser = require('../functions/newuser'),
newcategoria = require('../functions/newcategoria'),
newproduct = require('../functions/newproduct'),
deluser = require('../functions/deluser'),
delcategoria = require('../functions/delcategoria'),
delproduct = require('../functions/delproduct'),
updateuser = require('../functions/updateuser'),
updatecategoria = require('../functions/updatecategoria'),
updateproduct = require('../functions/updateproduct');

var url = "mongodb+srv://brinquedo:brinquedo2019@cluster0-auved.gcp.mongodb.net/test?retryWrites=true&w=majority";

class all{
  static get(req,res,collection){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection(collection).find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    });
  }
}

class produtos {
  static newUser (req,res){
   newuser(req,res,url);
  }
}

class dashboard{
  static insertProduct (req,res){
    newproduct(req,res,url)
  }
  static insertCategoria(req,res){
    newcategoria(req,res,url)
  }

  static deleteProduct(req,res){
    delproduct(req,res,url);
  }
  
  static deleteCategoria(req,res){
    delcategoria(req,res,url);
  }
  static deleteUser(req,res){
    deluser(req,res,url);
  }
  static putUser(req,res){
    updateuser(req,res,url);
  }
  static putCategoria(req,res){
    updatecategoria(req,res,url);
  }
  static putProduct(req,res){
    updateproduct(req,res,url);
  }

}

module.exports = {
  db:produtos,
  adm:dashboard,
  all:all
}