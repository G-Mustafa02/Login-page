const form = document.querySelector("#form");
const email = document.querySelector("#email");
const passsword = document.querySelector("#password");
const googleBtn= document.querySelector("#googleBtn")
const provider = new GoogleAuthProvider();
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// const auth = getAuth();
import { auth } from "./firebaseconfig.js";
// const auth = getAuth();

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user successfully signes in");
    window.location = "./index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("sorry error hass occured");
    
  });
})

googleBtn.addEventListener("click", ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(error);
    
  });
  
})
