exports = async function(payload, response) {
    const cluster = "mongodb-atlas";
    const dBase = "memehubclient";
    const coll = "search_Lab";
    const pageSize = 15;
    const collection = context.services.get(cluster).db(dBase).collection(coll);

    const action = payload.query.search;

    if (action == null) {
        const randomChoice = Math.random() < 0.5 ? "user" : "post";
        return [{ type: randomChoice }];
    }

    if (action === "drop") {
        return await collection.drop();
    } else if (action === "create" || action === "insert") {
        const randomChoice = Math.random() < 0.5 ? "user" : "post";
        const document = {
            type: randomChoice,
        };
        if (randomChoice === "user") {
            document.username = randomChoice + "meme";
            document.name = randomChoice + "memename";
        }
        const insertResult = await collection.insertOne(document);
        return [{ type: randomChoice }];
    } else {
        const results = await collection.find({}).sort({ _id: -1 }).limit(pageSize).toArray();
        if (results != null) {
            return results;
        } else {
            const randomChoice = Math.random() < 0.5 ? "user" : "post";
            return [{ type: randomChoice }];
        }
    }
};