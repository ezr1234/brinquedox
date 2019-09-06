const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let nome = req.body.nome,
  cnpj = req.body.cnpj,
  uf = req.body.uf;

    if(nome&&cnpj&&uf){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("fornecedores").findOne({nome:nome,cnpj:cnpj,uf:uf},(err,result) =>{
        if (err) {console.log(err)};
        if (result){
          res.sendStatus(403);
          db.close();
        }
        else{
          dbo.collection("fornecedores").insertOne({nome:nome,cnpj:cnpj,uf:uf}, function(err, result) {
            if (err) throw err;
            res.send('1 documento cadastrado');
            db.close();
            });
          }
        })
      })
    }else{
      res.sendStatus(400);
      res.end();
    }
}