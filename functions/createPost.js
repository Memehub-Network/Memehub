exports = async function(payload) { 
  
   var cluster = "mongodb-atlas"; 
   var dBase = "memehubclient"; 
   var coll = "posts"; 
  
    const collection = context.services.get(cluster).db(dBase).collection(coll); 
  
    try { 
  
       let posts = await collection.find({}).limit(10).toArray(); 
       //let num = await collection.countDocuments({}); 
  
    }catch(err){ 
        return { error: err.message }; 
    } 
  
    return { results: posts }; 
 };