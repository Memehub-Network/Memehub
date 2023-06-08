exports = async function(req, res) {

  if(req.body === undefined) { 
       throw new Error(`Request body was not defined.`) 
   }
  const model = JSON.parse(payload.body.text());

  const email = model.email;
const password = model.password;
  //const password = req.body.password;

  try {
    const result = await context.functions.execute("Function_0", email, password);
    if (result) {
      //res.status(200).json({ message: "Authentication successful" });
return "Authentication successful";
    } else {
return "Authentication failed";
      //res.status(401).json({ message: "Authentication failed" });
    }
    } catch (error) {
    //console.error(error);
    //res.status(500).json({ message: "Internal server error" });
return error.message;
  }
};