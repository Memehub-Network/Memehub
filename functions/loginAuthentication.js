exports = async function(){

const path = require('path');

let email = "lilmpesa@gmail.com";
let password = "atsiaya#";

var admin = require("firebase-admin");

//var serviceAccount = require("path/to/serviceAccountKey.json");

var serviceAccount = {
  "type": "service_account",
  "project_id": "memehub-server",
  "private_key_id": "dc87672d84aa22a7007882734bce718ec58cebfb",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDc2F6Aj6GIPaeQ\nTwGmbQ7Zmd6/3s5lEZ35bktrcxrqqBlNAHnf0N5aEU9ELsHxMtI0xaTr5DzfvCuP\nDHv2toOymC66etKZICElM3W9ogTpdOardc+9O0J6PBhJGwMdIpJWr9SEFqXRy7js\nBkXks2OJHNc9fzQ8bsFUcBVAXp0lQivoeX6Hlgg2Hl01F2/yMuLz9qad2qTpGRNJ\ns/7/X+hZwLOUfdf2CAqJ9Y7tUkaHO0feJRzluOSSFu8P4S8PlJDl8QmUB8k0dk8g\nxnTdAff6HczzifesMUV7zLO1s0YwAIgDpU37GH8CA/LI7JP7q+rDgLh+yRylBmDG\ncfUf7QJhAgMBAAECggEAAtw9TJlXom7ofj2st/vofeRgmn/zcMMLto7hdI/ABu8k\njT8S5QWEtLpNylR38/SYXQE8kabSDESI1KRo8F0Eq4XtsIH922h7b2q5RRqNqVun\nj2vSJAl6AuDngF5kgd6IUk26kRelQAhtQabS5ct2QADO75unuLrnP32IY+4Zx1FL\n/SaHPp2udBk9tWs8eaaHswTnwZJVJouwNLfEtPVhjmgU90Alk4wpCeSQLbyHl9up\n7sguAGdC0TTdT6ffHdxhESwq/Xdrf8DsLk/PCtOc6gPy5Un8a+nnXc+8RaCSmUV0\nmJF5pkUgzWdFtfMGacJVT3aWcRf27iZRKCTQC7r2UQKBgQDuKAYFy3aCrqmLFpu3\nPGhcEJH8vAlorNYI/HNIWyR4zGoYqWt5+xj0GJ6ynt59iBoEbMXHOwOCAhIhHOdQ\nGa6WRCFX2ntXNbjJ1Nx2Kl0DuckY4S4EDL6R/owJU4v8CZiigneUmjF5cxmRpBZM\nrm8YgCf/lCIrGl2g/x7b/j/ZMQKBgQDtZE7IojVA3m1u5tYU/toCn21AYumA4reR\n0qk4j89iRTvNKnyGcuYDhTH3+1/phxKy9MdRuJQHlYZRCzfq/fek7MzzHLUKGU33\n1UHcRlySy+YehUQUrZTivM1uFh9N95ECqH8vIpOSBJdxfsr47rm36nGThTYoV2g/\nKLF/Zd9wMQKBgQCXza85Fl3uIsMzQy/ydnDW7kD/5iPhMvojNDePkXkH/tRJ8APv\n9twLC35swNN1FMHwvBy9R6KOxh8kODZBWn1sjvTp+PvRtQ6aqDH2qD4t18iVMUOR\nlUYL7UL51uVNvBgszhjHAhozHejYas1EB5QM+/OC97tn2iCANN5IwCGWoQKBgC7I\n+g3oif5C1+ZncAGrSGQD75Ak7kgMZolCrz8KeKCxbFu+59PHiTVgZrysufZYPIMw\nYqfkbKgh+9q1D0wsyUWjtbCkE7ntysPxL42uAEieDrgtI4G/w/v7obD0gy7mf5m6\ng3ZSpiq85OvlRTNSOR/aAJBGTKoer9jiuDiXZzXBAoGBALuz9rM7sUyeX8iNo3wW\nJK8GDXEzJLGmCloyneTjtOjhb3vOX3SDniPCsaxsYPz0/eng+bxaRurUMyvnMLWt\nwR7ownsnZpdCZe7CYOnhW/IvU1xDVhu9On4p62haBjU7I8XA8UzYbxTPb3616IHW\nW/uKkwDFrJTCcC23Q7cOKA0X\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-6w9yy@memehub-server.iam.gserviceaccount.com",
  "client_id": "115190813910741060918",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6w9yy%40memehub-server.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};


const adminn = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://memehub-server-default-rtdb.firebaseio.com"
});


console.log(admin.name);
return admin.name;

/*

  const admin = context.services.get('firebase-admin');
  const auth = admin.auth();

  try {
    const userRecord = await auth.signInWithEmailAndPassword(email, password);
    const { uid, email: userEmail, displayName } = userRecord;
    return { uid, email: userEmail, displayName };
  } catch (error) {
//const er = "Authentication failed!";
//return er;
    throw new Error('Authentication failed');
  }
//};

//const result = await function("lilmpesa@gmail.com", "atsiaya#");


//return result;


*/
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
