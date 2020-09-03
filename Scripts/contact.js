const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu');
  const menu = document.querySelectorAll ('.menu li')

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
     
  });
  

}

navSlide();

const error = document.getElementById('error');
let success = document.getElementById('success');
const submitbtn = document.getElementById('submitbtn');
let info = [];
let data = [];


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0c0NclmrcZErMkWshnxHiPGc7NJZrkO8",
    authDomain: "capstone-project-remy.firebaseapp.com",
    databaseURL: "https://capstone-project-remy.firebaseio.com",
    projectId: "capstone-project-remy",
    storageBucket: "capstone-project-remy.appspot.com",
    messagingSenderId: "610521963750",
    appId: "1:610521963750:web:4fcd0d1c3cc7b3b867af27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db=firebase.firestore();
  
  var form=document.getElementById('form');
  form.addEventListener('submit',send);


  

  function send(e){
      e.preventDefault();

      var name=getInput('name');
      var email=getInput('email');
      var message=getInput('messageArea');

     if(!isName((name))|| (name.length <= 3)) {
       info.push('Name is invalid');
      
      }
     if (!isEmail(email)) {
      info.push('Email is invalid');
       
      }
    if (message.length < 40 ) {
         info.push('Message is too short');
       
      }
     if (info.length > 0) {
      e.preventDefault();
     error.innerText = info.join('\n');
     return false;
    }

   

      db.collection('messages').add({
          name:name,
          email:email,
          message:message

      })
      
      document.getElementById('form').reset();
      data.push('Data has been sent');
      success.innerText = data.join('\n');

      }

    function getInput(id){
    return document.getElementById(id).value;
    }
    function isName(name){
      return /^[a-zA-Z' ']+$/.test(name)
    }
    function isEmail(email) {
      return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
    }
   
  
  






 