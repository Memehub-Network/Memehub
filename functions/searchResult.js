exports = async function(payload, response) {
    var cluster = "mongodb-atlas";
    var dBase = "memehubclient";
    var coll = "search_Lab";

var pageSize = 15;

    const collection = context.services.get(cluster).db(dBase).collection(coll);

    const action = payload.query.search;

    if (action == null) {

      const randomChoice = Math.random() < 0.5 ? "user" : "post";
      
        return [
            {
                type: randomChoice
            }
        ];
}

    if (action === "drop") {
        const result = await collection.drop();
        return result;
    } else if (action === "create") {
        const document = {
            type: "post"
        };
        const result = await collection.insertOne(document);
        return result;
    } else if (action === "insert") {
        // Randomly choose between "user" and "post"
        const randomChoice = Math.random() < 0.5 ? "user" : "post";
        if (randomChoice === "post"){

        const document = {
            type: randomChoice
        };
}else{
        const document = {
            type: randomChoice,
username: randomChoice + "meme",
name: randomChoice + "memename"
        };
}
        const insertResult = await collection.insertOne(document);

        // Delete the inserted document (uncomment if needed)
        // const deleteResult = await collection.deleteOne({ _id: insertResult.insertedId });

        return [{ type: randomChoice }]; // Return the random choice as "type".
    }else{


       const results = await collection.find({}).sort({ _id: -1 }).limit(pageSize).toArray();


      const randomChoice = Math.random() < 0.5 ? "user" : "post";
      
if(results != null){
return [results];
}else{
        return [
            {
                type: randomChoice
            }
        ];
}
}
};