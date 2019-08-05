var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://brinquedo:brinquedo2019@cluster0-auved.gcp.mongodb.net/test?retryWrites=true&w=majority";


class produtos {
  static allProducts (req,res){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("produtos").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    });
  }
}

class dashboard{
  static insertProduct (req,res){
    let nome = req.body.nome;
    let categoria = req.body.categoria;
    let peso = req.body.peso;
    let dimensoes = req.body.dimensoes;
    let marca = req.body.marca;
    let imagem = req.body.imagem;
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("categorias").findOne({categoria:categoria},(err,result) =>{
        if (err) {console.log(err)};
        if (result){
          var myobj = { 
            nome: nome,
            categoria:categoria,
            peso:peso,
            dimensoes:dimensoes,
            marca:marca,
            imagem:imagem
         };
         dbo.collection("produtos").findOne({nome:nome},(err,result)=>{
            if(err){console.log(err)};
              if(result){
                res.sendStatus(403);
                db.close();
              }
              else{
                dbo.collection("produtos").insertOne(myobj, function(err, result) {
                  if (err) throw err;
                  res.send('1 documento cadastrado');
                  db.close();
                });
              }
            })
         }
        else{
          res.sendStatus(403);
          db.close();
        }
      })
    });
  }

  static deleteProduct(req,res){
    let nome = req.body.nome;
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("produtos").findOne({nome:nome},(err,result)=>{
        if(err){console.log(err)}
        if(result){
          var myquery = { nome:nome };
          dbo.collection("produtos").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            res.send('1 documento apagado');
            db.close();
          });
        }
        else{
          res.sendStatus(403);
          db.close();
        }
      })
    });
  }
  static insertCategoria(req,res){
    let categoria = req.body.categoria;
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("categorias").findOne({categoria:categoria},(err,result) =>{
        if (err) {console.log(err)};
        if (result){
          res.sendStatus(403);
          db.close();
        }
        else{
          dbo.collection("categorias").insertOne({categoria:categoria}, function(err, result) {
            if (err) throw err;
            res.send('1 documento cadastrado');
            db.close();
          });
        }
      })
    })
  }
  static deleteCategoria(req,res){
    let categoria = req.body.categoria;
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("categorias").findOne({categoria:categoria},(err,result)=>{
        if (err){console.log(err)}
        if(result){
          dbo.collection("categorias").deleteOne({categoria:categoria}, function(err, obj) {
            if (err) throw err;
            res.send('1 documento apagado');
            db.close();
          });
        }
        else{
          res.sendStatus(403);
          db.close();
        }
      })
    })
  }
  static getCategorias(req,res){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("categorias").find({}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
        db.close();
      }) 
    })
  }
}

module.exports = {
  db:produtos,
  adm:dashboard
}