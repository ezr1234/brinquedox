const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let categoria = req.body.categoria;
    if(categoria){
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
            res.sendStatus(404);
            db.close();
          }
        })
      })
    }else{
      res.sendStatus(400);
      res.end();
    }
}