const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{

  let nome = req.body.nome,
  newnome = req.body.newnome,
  newpreco = req.body.newpreco,
  newcategoria = req.body.newcategoria;

  if(nome&&newcategoria&&newpreco&&newnome){
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
      let dbo = db.db("loja");

      dbo.collection("produtos").updateOne({nome:nome},
        {$set:{nome:newnome,preco:newpreco,categoria:newcategoria}},(err,result)=>{
          if(err){console.log(err)}
          if(result.modifiedCount === 1){
            res.end();
            db.close();
          }
          else{
            res.sendStatus(404);
            res.end();
            db.close();
          }
        })
    })

  }else{
    res.sendStatus(400);
    res.end();
  }

}

