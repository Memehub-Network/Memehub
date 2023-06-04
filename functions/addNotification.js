exports = async function (request, response) {
  
  const deployment = context.services.get("mongodb-atlas");
  const database = deployment.db("memehubclient");
  const collection = database.collection("notifications");

   try {
      // 1. Parse data from the incoming request
      if(request.body === undefined) {
      throw new Error(`Request body was not defined.`)
      }
      const body = JSON.parse(request.body.text());
      
      let username = body.username;
      let avatar = body.avatar;
      let caption = body.caption;
      let post_preview = body.post_preview;
      let notable = body.notable;
      let action = body.action;
      
      let timestamp = new Date();
      
      // 2. Handle the request
      const { insertedId } = await collection
      .insertOne({ 
        avatar: avatar,
        username: username,
        caption: caption,
        post_preview: post_preview,
        notable: notable,
        action: action,
        createTime: timestamp 
      });
      // 3. Configure the response
      response.setStatusCode(201);
      // tip: You can also use EJSON.stringify instead of JSON.stringify.
      response.setBody(JSON.stringify({
         message: "Notification added successfully",
         insertedId,
      }));
   } catch (error) {
      response.setStatusCode(400);
      response.setBody(error.message);
   }
}