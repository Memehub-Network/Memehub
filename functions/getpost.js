exports = async function(payload, response) {
  /*
  if(payload.body === undefined) {
      throw new Error(`Request body was not defined.`)
  }
  */
 
  const pager = payload.query.page;
 
  var cluster = "mongodb-atlas";
  var dBase = "memehubclient";
  var coll = "posts";
  
  var pageQ = 0;
  var pageSize = 5;
  var pageNumber = 0;
  
  if(pager!=null){
    pageNumber = pager;
    pageQ = pager;
  }else{
   pageQ = 0;
  }
  
   const collection = context.services.get(cluster).db(dBase).collection(coll);
   
   try {
     pages = await collection.count({});
     
       posts = await collection.find({})
       .skip(pageSize * pageNumber)
       .limit(pageSize)
       .toArray();
      
       if(Array.isArray(posts) && !posts.length){
         if(pages>1){
           results = "End";
         }else
         results = "No Results!";
      
       }else{
         results = posts;
       }
       
   }catch(err){
       return { error: err.message };
   }
   
  //return [ page: 1,results:results ];
  return JSON.stringify([
     page:pager,
     data: results
     ]);
  
};
