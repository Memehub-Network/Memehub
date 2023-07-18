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
    if(pager == 0){
      pageNumber = 0;
      pageQ = 1;
    }else if(pager == 1){
      pageNumber = 0;
      pageQ = 1;
    }else{
    pageNumber = pager;
    pageQ = pager;
    }
      
  }else{
   pageQ = 1;
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
           results = [];
         }else
         results = [];
      
       }else{
         results = posts;
       }
       
   }catch(err){
       return { error: err.message };
   }
   
  return { page: pageQ, data:results };
  
};
