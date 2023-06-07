exports = async function(){

let email = "lilmpesa@gmail.com";
let password = "atsiaya#";


function logoin(email, password) {

  const admin = context.services.get('firebase-admin');
  const auth = admin.auth();

  try {
    const userRecord = await auth.signInWithEmailAndPassword(email, password);
    const { uid, email: userEmail, displayName } = userRecord;
    return { uid, email: userEmail, displayName };
  } catch (error) {
const er = "Authentication failed!";
return er;
    throw new Error('Authentication failed');
  }
};

logoin(email, password);

//const result = await function("lilmpesa@gmail.com", "atsiaya#");


//return result;



   // const firebase = require('firebase/app');
    //require('firebase/auth');

/*
    const firebaseConfig = {
      apiKey: "AIzaSyAKBrTeGmSSyj6Rg37surQRshyfRn8t8dQ",
      authDomain: "memehub-server.firebaseapp.com",
      databaseURL: "https://memehub-server-default-rtdb.firebaseio.com",
      projectId: "memehub-server",
      storageBucket: "memehub-server.appspot.com",
      messagingSenderId: "696200336899",
      appId: "1:696200336899:web:6401e35efad652b677a036",
      measurementId: "G-TGND5FYYL9"
    };

    firebase.initializeApp(firebaseConfig);

    //exports = async function(/*email, password) {
     let email = "lilmpesa@gmail.com";
     let password = "atsiaya#";

      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      const { uid, email: userEmail, displayName } = response.user;
  
      return { uid, email: userEmail, displayName };
};
*/





    //const user = "lil.mpesa is the admin!";
    //return user;

}
/*
exports = async function (payload) {
  // 1. Parse the `payload` object, which holds data from the
  //    FunctionCredential sent by the SDK.
  const { username, password } = payload;

  // 2. Create a new user or log in an existing user in the external
  //    authentication service.

  // You can use a client library from npm
  const auth = require("fake-auth-service");
  const user = await auth.login({ username, password });

  // Or you can communicate directly over HTTP
  const userFromHttp = await context.http.post({
    url: "https://example.com/auth/login",
    headers: {
      Authorization: ["Basic bmlja0BleGFtcGxlLmNvbTpQYTU1dzByZA=="],
    },
    body: JSON.stringify({ username, password }),
  });

  // 3. Return a unique identifier for the user. Typically this is the
  //    user's ID in the external authentication system or the _id of a
  //    stored MongoDB document that describes them.
  //
  //    !!! This is NOT the user's internal account ID for your app !!!
  return user.id;
};
*/
