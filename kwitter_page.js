var firebaseConfig = {
      apiKey: "AIzaSyAw9dhVyHie9qq-_yb7uF8nrglhKldQhGM",
      authDomain: "kwitter-a197c.firebaseapp.com",
      databaseURL: "https://kwitter-a197c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a197c",
      storageBucket: "kwitter-a197c.appspot.com",
      messagingSenderId: "237107289053",
      appId: "1:237107289053:web:03264e2d96ec0739857434"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send() {
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like: 0
});
document.getElementById("output").innerHTML = msg;
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


