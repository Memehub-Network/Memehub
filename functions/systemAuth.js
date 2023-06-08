exports = async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  var cluster = "mongodb-atlas"; 
   var dBase = "authentication"; 
   var coll = "users";
  
    const collection = context.services.get(cluster).db(dBase).collection(coll); 
 

  try {
    const result = await context.functions.execute("authenticateUser", email, password);
    if (result) {
      res.status(200).json({ message: "Authentication successful" });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};