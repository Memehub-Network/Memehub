exports = async function(payload, response) {
//exports = async function(request, response) {
  
  if(payload.body === undefined) {
      throw new Error(`Request body was not defined.`)
  }
  const bodyy = JSON.parse(payload.body.text());
  
  const pager = payload.query.page;
  
  var pageSize = 10;
  var pageNumber = 0;
  
  if(pager!=null){
    pageNumber = pager;
    pageQ = pager;
  }else{
   var pageQ = 0;
  }
  
  /*
  if (bodyy.limit < 9) { 
    var limit = 10
  }else{
    limit = bodyy.limit
  }
  */
  //var limit = body.limit;
  //var skip = bodyy.skip;
  
  var cluster = "mongodb-atlas";
  var dBase = "memehubclient";
  var coll = "posts";
  
   const collection = context.services.get(cluster).db(dBase).collection(coll);
   
   try {
     pages = await collection.count({});
     
       posts = await collection.find({})
       .skip(pageSize * pageNumber)
       .limit(pageSize)
       .toArray();
      
       if(Array.isArray(posts) && !posts.length){
         if(pages>1){
           results = "The end";
         }else
         results = "No Results!";
      
       }else{
         results = posts;
       }
       
   }catch(err){
       return { error: err.message };
   }
   
   return {
     //page:pageQ,
     results:results,
     //total_results:pages
   };
  
};
