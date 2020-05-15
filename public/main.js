
  // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBk5AGx2WK28UDZFURn3Fj8hisBwL7rHGQ",
  authDomain: "form-126.firebaseapp.com",
  databaseURL: "https://form-126.firebaseio.com",
  projectId: "form-126",
  storageBucket: "form-126.appspot.com",
  messagingSenderId: "315436231409",
  appId: "1:315436231409:web:fcc2b39e62f88aa20d5750"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

function signUp(){
  var email=document.getElementById("email");
  var password =document.getElementById("password");

  const promise=auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
}

function signIn(){
  var email=document.getElementById("email");
  var password =document.getElementById("password");

  const promise=auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed In" + email.value);
}

function signOut(){
  auth.signOut();

  alert("Signed Out");
}

