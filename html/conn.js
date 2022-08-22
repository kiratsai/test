
  // Import the functions you need from the SDKs you need
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCKmS29HvakcC1Ahcgm64r0cTD4gkO_Ip4",
    authDomain: "ia-database-421ac.firebaseapp.com",
    databaseURL: "https://ia-database-421ac-default-rtdb.firebaseio.com",
    projectId: "ia-database-421ac",
    storageBucket: "ia-database-421ac.appspot.com",
    messagingSenderId: "859125618347",
    appId: "1:859125618347:web:8fe586368b8ff64590c9ee",
    measurementId: "G-J0YDEC1LH7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  document.getElementById("login").onclick = function() {login()};

  function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("success");
      window.location.href="home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error");
    });
  }
  

  function retrieve() {
    firebaseConfig.initializeApp(firebaseConfig);
    const firebaseRef=firebase.database().ref("account");
    firebaseRef.once("value", function(snapshot){
      const data = snapshot.val();
      for(let i in data){
        console.log(data[i]);
      }
    })
  }

  document.getElementById("register").onclick = function() {signup()};
  function signup(){
    var signupEmail = document.getElementById('email').value;
    var signupPassword = document.getElementById('password').value;
    var username = document.getElementById('username').value;


createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then((userCredential) => {
    const user = userCredential.user;
    alert('user crate');
    window.location.href="home.html";
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode+'code');
    alert(errorMessage+'message');

});
}


