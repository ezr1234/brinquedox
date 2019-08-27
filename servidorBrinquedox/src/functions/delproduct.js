const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let nome = req.body.nome;
    if(nome){
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
            res.sendStatus(404);
            db.close();
          }
        })
      });
    }else{
      res.sendStatus(400);
      res.end();
    }
}