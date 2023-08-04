exports = async function(request, response) {

       var cluster = "mongodb-atlas"; 
   var dBase = "authentication";  
   var coll = "users";  
  
   const createUser = context.services.get(cluster).db(dBase).collection(coll); 

    try {
        // 1. Parse data from the incoming request
        if (request.body === undefined) {
            throw new Error(`Request body was not defined.`);
        }
        const body = JSON.parse(request.body.text());

        let username = body.username;
        let uid = body.uid;
        let email = body.email;


        let timestamp = new Date();

        // 2. Handle the request
        createUser.insertOne({
            id: uid,
            username: username,
            email: email,
            dob: "",
            is_email_verified: false,
            role: "user",
            customData: {
                full_name: "",
                avatar_url: "",
                cover_pic_url: "",
                followers_count: 0,
                following_count: 0,
                is_verified: false,
                is_banned: false,
                ban_reason: "",
                bio: "",
                website: "",
                post_count: 0,
                created_at: timestamp
            },
            app_data: {
                dark_mode: false
            }
        });
        // 3. Configure the response
        response.setStatusCode(201);
        // tip: You can also use EJSON.stringify instead of JSON.stringify.
        response.setBody(JSON.stringify({
            message: "user created"
        }));
    } catch (error) {
        response.setStatusCode(401);
        return { error: error.message };
        //response.setBody(error.message);
    }
};