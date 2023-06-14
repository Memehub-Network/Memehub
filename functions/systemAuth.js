exports = async function(req, res) {

  if(req.body === undefined) { 
       throw new Error(`Request body was not defined.`) 
   }
  const model = JSON.parse(req.body.text());

  const password = model.password;
  const username = model.username;
  
  empty = "";

  if(model.username == empty){
      return "username empty!";
  }else if(model.password == empty){
      return "password is null!";
}else{
      //username = model.username;
      const pass = password;
      
      try {
         const result = await context.functions.execute("Function_0", username, pass);
    if (result) {
      res.setStatusCode(201); 
       // tip: You can also use EJSON.stringify instead of JSON.stringify. 
       //res.setBody(JSON.stringify({ message: "success"}));
      return "success";
    } else {

      res.setStatusCode(401); 
       // tip: You can also use EJSON.stringify instead of JSON.stringify. 
       //res.setBody(JSON.stringify({ message: "failed"}));
      return "failed";
    }
    } catch (error) {
    res.setStatusCode(400); 
      res.setBody(error.message);
  }
}
};
