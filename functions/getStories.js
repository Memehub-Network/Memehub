exports = async function(payload) {
  
  var cluster = "mongodb-atlas";
  var dBase = "meme-stories";
  var coll = "stories";
  
   const collection = context.services.get(cluster).db(dBase).collection(coll);
   
   try {
     
      story = await collection.find({}).limit(20).toArray();
      //let num = await collection.countDocuments({});
       
   }catch(err){
       return { error: err.message };
   }
   
   return story;
};