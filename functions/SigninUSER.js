exports = function(payload) {
  
  var cluster = "mongodb-atlas";
  var dBase = "authentication"; 
  var coll = "users"; 
  
  const usersCollection = context.services.get(cluster).db(dBase).collection(coll); 
  
  const userpass = "lil.mpesa";
  const password = 'atsiaya#';
  
  query = { username: userpass };
  
  try{
    return usersCollection.findOne({username: userpass});
    
  }catch(err){
    return err.message;
  }
  
  
};