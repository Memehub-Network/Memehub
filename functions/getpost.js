exports = async function(payload, response) {
  /*
  if(payload.body === undefined) {
      throw new Error(`Request body was not defined.`)
  }
  */
 
  const pageNumber = payload.query.page;
 /*
 
 exports = function(pageNumber) {
  const pageSize = 5; // Number of items to return per page
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const postsCollection = context.services.get("mongodb-atlas").db("yourDatabaseName").collection("yourCollectionName");

  try {
    // Query the database to get the items for the requested page
    const posts = postsCollection.find({}).sort({ _id: -1 }).skip(startIndex).limit(pageSize).toArray();

    return posts;
  } catch (error) {
    // Handle any errors that occur during the database query
    return { error: error.message };
  }
};
 
 
 */
 
 
 
  var cluster = "mongodb-atlas";
  var dBase = "memehubclient";
  var coll = "posts";
  
  const pageSize = 5; // Number of items to return per page
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
   const collection = context.services.get(cluster).db(dBase).collection(coll);
   
   try {
     pages = await collection.count({});
     
       posts = await collection.find({}).sort({ _id: -1 }).skip(startIndex).limit(pageSize).toArray();
      
       if(Array.isArray(posts) && !posts.length){
         if(pages>1){
           results = [];
         }else
         results = [];
      
       }else{
         results = posts;
       }
       
   }catch(err){
       return { error: err.message };
   }
   
  return { 
    page: pageNumber, 
    data:results, 
    total_results: pages 
  };
  
};
