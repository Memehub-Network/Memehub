exports = async function(username, password) {

   var cluster = "mongodb-atlas"; 
   var dBase = "authentication"; 
   var coll = "users"; 
  
   const usersCollection = context.services.get(cluster).db(dBase).collection(coll); 
 

   //const usersCollection = context.services.get("mongodb-atlas").db("your-database").collection("users");

   // Find the user document based on the email
   const user = await usersCollection.findOne({ username: username });

   if (user && user.password === password) {
     // User authentication successful
     return true;
   } else {
     // User authentication failed
     return false;
   }
};