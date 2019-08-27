const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let nome = req.body.nome,
  email = req.body.email,
  newnome = req.body.newnome,
  newemail = req.body.newemail;

  if(nome&&email&&newemail&&newnome){
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
      let dbo = db.db("loja");

      dbo.collection("usuarios").updateOne({nome:nome,email:email},{$set:{
        nome:newnome,
        email:newemail,
      }},(err,result)=>{
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
