const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let categoria = req.body.categoria;
    if(categoria){
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
    }else{
      res.sendStatus(400);
      res.end();
    }
}