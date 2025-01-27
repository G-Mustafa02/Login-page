const form = document.querySelector("#form");
const email = document.querySelector("#email");
const passsword = document.querySelector("#password");



import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";



import { auth } from "./firebaseconfig.js";

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user successfully logged in");
    window.location = "./dashboard.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("sorry error hass occured");
    
  });
})



