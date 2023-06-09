exports = async function(req, res) {

  if(req.body === undefined) { 
       throw new Error(`Request body was not defined.`) 
   }
  const model = JSON.parse(req.body.text());

  //const email = model.email;
  const password = model.password;
  const username = model.username;

  if(model.username === ""){
      email = model.email;
  }else if(model.username != null){
      email = model.username;
  }

  try {
    const result = await context.functions.execute("Function_0", username, email, password);
    if (result) {
      res.setStatusCode(201); 
       // tip: You can also use EJSON.stringify instead of JSON.stringify. 
       res.setBody(JSON.stringify({ 
          message: "Auth Success"}));
    } else {

      res.setStatusCode(401); 
       // tip: You can also use EJSON.stringify instead of JSON.stringify. 
       res.setBody(JSON.stringify({ 
          message: "Auth Failed"}));
    }
    } catch (error) {
    res.setStatusCode(400); 
      res.setBody(error.message);
  }
};