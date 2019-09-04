const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{

  let nome = req.body.nome,
  cnpj = req.body.cnpj,
  newnome = req.body.newnome,
  newuf = req.body.newuf;

  if(nome&&cnpj&&newuf&&newnome){
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
      let dbo = db.db("loja");

      dbo.collection("fornecedores").updateOne({nome:nome,cnpj:cnpj},
        {$set:{nome:newnome,uf:newuf}},(err,result)=>{
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

