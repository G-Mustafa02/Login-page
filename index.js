import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
//const auth = getAuth();
import { auth } from "./firebaseconfig.js";
const logout = document.querySelector("#log-out");


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      
      // ...
    } else {
      // User is signed out
      // ...
      console.log("user log out ha");
      
    }
  });

    logout.addEventListener("click", (event)=>{
    event.preventDefault();
        signOut(auth)
        .then(()=>{window.location = "./login.html"}).catch((error) => {
            console.log(error);})
    })