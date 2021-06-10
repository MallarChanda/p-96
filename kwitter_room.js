
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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
 room_name = document.getElementById("room_name").value;  
 firebase.database().ref("/").child(room_name).update({purpose:"adding roomname"});
 localStorage.setItem("room_name",room_name);
 window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location= "kwitter_page.html";  
}

function logout() {
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "index.html";
}
