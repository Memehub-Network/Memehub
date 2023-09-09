exports = async function(payload, response) {
 
  const pageNumber = payload.query.page;
 
  var cluster = "mongodb-atlas";
  var dBase = "memehubclient";
  var coll = "posts";
  
  const pageSize = 5;
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
   
/*
  return { 
    status: pageNumber, 
    data:results, 
    total_results: pages 
  };
*/
   return results;
  
};
