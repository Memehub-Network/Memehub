exports = function(payload) {
   const mongodb = context.services.get("mongodb-atlas");
   const mycollection = mongodb.db("memehubclient").collection("notifications");
   return mycollection.find({}).limit(12).toArray();
};