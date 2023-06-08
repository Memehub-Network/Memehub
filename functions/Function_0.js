exports = async function(username, email, password) {

   var cluster = "mongodb-atlas"; 
   var dBase = "authentication"; 
   var coll = "users"; 
  
   const usersCollection = context.services.get(cluster).db(dBase).collection(coll); 
 

   //const usersCollection = context.services.get("mongodb-atlas").db("your-database").collection("users");

   // Find the user document based on the email
   const user = await usersCollection.findOne({ email: email });


   if (user && user.password === password) {
     // User authentication successful
     return true;
   } else {
     // User authentication failed
     return false;
   }
};