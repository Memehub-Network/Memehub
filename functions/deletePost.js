exports = async function(payload, response) {
    // Extract the 'id' parameter from the request URL
    const id = payload.query.id;

    if (!id) {
        response.setStatusCode(400);
        response.setBody("Missing 'id' parameter");
        return;
    }

    const memesCollection = context.services.get("mongodb-atlas")
        .db("memehubclient")
        .collection("posts");

    try {
        // Find the document with the specified 'id'
        const documentToDelete = await memesCollection.findOne({
            _id: BSON.ObjectId(id)
        });

        if (!documentToDelete) {
            response.setStatusCode(404);
            response.setBody("Document not found");
            return;
        }

        // Delete the document
        await memesCollection.deleteOne({
            _id: BSON.ObjectId(id)
        });

        // Return a success message
        response.setStatusCode(200);
        response.setBody("Document deleted successfully");
    } catch (error) {
        response.setStatusCode(500);
        response.setBody(error.message);
    }
};