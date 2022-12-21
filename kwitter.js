const firebaseConfig = {
    apiKey: "AIzaSyDLhLgRKp51lHO7tJB3vNyaYP-UkAMvxDI",
    authDomain: "kwitter2-604af.firebaseapp.com",
    databaseURL: "https://kwitter2-604af-default-rtdb.firebaseio.com",
    projectId: "kwitter2-604af",
    storageBucket: "kwitter2-604af.appspot.com",
    messagingSenderId: "38120017457",
    appId: "1:38120017457:web:35f8a8085f5a3033c48f10"
};

  firebase.initializeApp(firebaseConfig);

  usuario = localStorage.getItem("usuario");

  document.getElementById("usuario").innerHTML = "Bem-vindo(a)" + usuario + "!";

  function addUser()
  {
    usuario = document.getElementById("usuario").value;
    firebase.database().ref("/").child(usuario).update ({
        purpose : "Adicionar usuario"
    });
    window.location = "kwitter_room.html";
  }

