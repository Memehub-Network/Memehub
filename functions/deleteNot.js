exports = async function(request, response) {
  
  if(request.body === undefined) {
      throw new Error(`Request body was not defined.`)
  }
  const body = JSON.parse(request.body.text());
  
  //var limit = body.limit;
  //var skip = body.skip;
  
  var cluster = "mongodb-atlas";
  var dBase = "memehubclient";
  var coll = "posts";
  
  const collection = context.services.get(cluster).db(dBase).collection(coll);
  let query = { _id: body.id }
  
  try {
     
       posts = await collection.deleteOne(query);
       
   }catch(err){
       return { error: err.message };
   }
   return { results: posts }
};



/*exports = function(payload) {
   const mongodb = context.services.get("mongodb-atlas");
   const mycollection = mongodb.db("memehubclient").collection("notifications");
   
   //deleteOne
   const query = { "_id":"4545" };
   
   try{
      return mycollection.deleteOne(query);
   } catch (error){
       response.setStatusCode(400);
       response.setBody(error.message);
   }
};


exports = async function (request, response) {
  
  const deployment = context.services.get("mongodb-atlas");
  const database = deployment.db("memehubclient");
  const collection = database.collection("notifications");

   //try {
      // 1. Parse data from the incoming request
      if(request.body === undefined) {
      throw new Error(`Request body was not defined.`)
      }
      const body = JSON.parse(request.body.text());
      
      let id = body.id;
      
      const queryu = { "_id": id };
      
      
      const query = request.body.text();
      
collection.deleteOne(query)
  .then(result => console.log(`Deleted ${result.deletedCount} item.`))
  .catch(err => console.error(`Delete failed with error: ${err}`))
 
}     
    /*  
      
      
      // 2. Handle the request
      collection.deleteOne(query)
      .then(result => console.log(`Deleted ${result.deletedCount} item.`))
  .catch(err => console.error(`Delete failed with error: ${err}`))
}
  
      // 3. Configure the response
      response.setStatusCode(201);
      // tip: You can also use EJSON.stringify instead of JSON.stringify.
      response.setBody(JSON.stringify({
         message: "Deleted ${result.deletedCount} item.`",
         deletedId,
      }));
   } catch (error) {
      response.setStatusCode(400);
      response.setBody(error.message);
   }
}

/*const query = { "name": "lego" };

itemsCollection.deleteOne(query)
  .then(result => console.log(`Deleted ${result.deletedCount} item.`))
  .catch(err => console.error(`Delete failed with error: ${err}`))
  */