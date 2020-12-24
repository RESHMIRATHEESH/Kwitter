

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbGeab3RCk4J0h2oh2TDflB-h4ClK-VVA",
  authDomain: "shinchan-rxjloq.firebaseapp.com",
  databaseURL: "https://shinchan-rxjloq-default-rtdb.firebaseio.com",
  projectId: "shinchan-rxjloq",
  storageBucket: "shinchan-rxjloq.appspot.com",
  messagingSenderId: "821479175135",
  appId: "1:821479175135:web:b113ac649e67f6ab2d0a6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

 


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
