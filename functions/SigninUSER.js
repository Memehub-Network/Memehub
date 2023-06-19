exports = async function(req, res) {
  
  if(req.body === undefined) { 
       throw new Error(`Request body was not defined.`) 
  }
  const model = JSON.parse(req.body.text());

  const email = "";
  const password = model.password;
  const username = model.username;
  
  var cluster = "mongodb-atlas";
  var dBase = "authentication"; 
  var coll = "users"; 
  
  const usersCollection = context.services.get(cluster).db(dBase).collection(coll); 
  
  const addUSER = {
  "email": "",
  "password": password,
  "username": username
};
  
  try{
    //return usersCollection.findOne({username: userpass});
    const result = await context.functions.execute("userCHECK", username, password);
    
    if(result){
      return "user found" + req.url;
    }else{
      usersCollection.insertOne(addUSER);
      return username;
      //.then(result => console.log(`added user: ${result.insertedId}`))
      //.catch(err => console.error(`Failed to insert item: ${err}`));
    }
  }catch(err){
    return err.message;
  }
  
};