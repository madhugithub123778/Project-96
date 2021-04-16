// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBti0V_xvzZ-MgXDz72tzKveIgidxyA-qs",
    authDomain: "project-kwitter-da2d3.firebaseapp.com",
    databaseURL: "https://project-kwitter-da2d3-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-da2d3",
    storageBucket: "project-kwitter-da2d3.appspot.com",
    messagingSenderId: "210473470722",
    appId: "1:210473470722:web:4ba07bf7eb95543297901b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("yourname");
  roomName = localStorage.getItem("roomname");

  function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({
name: userName,
message: msg,
like: 0});
document.getElementById("msg").value= "";
  }



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function logout(){
  localStorage.removeItem("yourname");
  window.location="index.html";
  
  
  }