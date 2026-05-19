import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
 getAuth,
 GoogleAuthProvider,
 signInWithPopup
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "studio-9xeng.firebaseapp.com",

  projectId: "studio-9xeng",

  storageBucket: "studio-9xeng.firebasestorage.app",

  messagingSenderId: "885752995722",

  appId: "1:885752995722:web:e15acce093a3cdbd1bb273"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

document
.getElementById("loginBtn")
.addEventListener("click", async ()=>{

 try{

   const result =
   await signInWithPopup(auth, provider);

   const user = result.user;

   document.getElementById("userInfo")
   .innerText =
   "Logged in: " + user.email;

   localStorage.setItem(
     "autofilerUser",
     JSON.stringify({
       email:user.email
     })
   );

 }catch(error){

   console.log(error);

 }

});
