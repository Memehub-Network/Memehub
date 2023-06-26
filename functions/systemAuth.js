exports = async function(req, res) {

  if(req.body === undefined) { 
       throw new Error(`Request body was not defined.`) 
  }
  
  const model = JSON.parse(req.body.text());

  const password = model.password;
  const username = model.username;
  
  empty = "";

  if(model.username == empty){
    res.setStatusCode(401);
    res.setBody(JSON.stringify({
      "type": "login",
      "statusCode": 401,
      "statusMessage": "Username is empty!",
      "resource_id": 1
    }));
  }else
  if(model.password == empty){
    res.setStatusCode(401);
    res.setBody(JSON.stringify({
      "type": "login",
      "statusCode": 401,
      "statusMessage": "Password is empty!",
      "resource_id": 2
    }));
  }else{
    //username = model.username;
    const pass = password;
    try {
      const result = await context.functions.execute("Function_0", username, pass);
      if(result) {
        res.setStatusCode(201); 
        res.setBody(JSON.stringify({
          "type": "login",
          "statusCode": 200,
          "statusMessage": "Login Successful",
          "resource_id": 3
        }));
        
      }else{
        res.setStatusCode(401); 
        // tip: You can also use EJSON.stringify instead of JSON.stringify. 
        res.setBody(JSON.stringify({
          "type": "login",
          "statusCode": 401,
          "statusMessage": "Login Failed",
          "resource_id": 4
          
        }));
        
      }
      
    }catch(error){
      res.setStatusCode(400);
      res.setBody(error.message);
    }
    
  }
};