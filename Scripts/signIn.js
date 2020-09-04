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

      var name=getInput('name')
      var password=getInput('password');

     if(!isName((name))|| (name.length <= 3)) {
       info.push('Name is invalid');
       document.getElementById('span1').style.display= 'inline-block';
      }
      if (!isPassword(password)) {
        info.push('Password must contain atleast one capital letter and a number !');
         document.getElementById('span2').style.display= 'inline-block';
     
    }
     if (info.length > 0) {
      e.preventDefault();
     error.innerText = info.join('\n');
     return false;
    }

   

      db.collection('signIn').add({
          name:name,
          password:password

      })
      
      document.getElementById('form').reset();
      data.push('Data has been sent');
     /* success.innerText = data.join('\n'); */

      }

    function getInput(id){
    return document.getElementById(id).value;
    }
    function isName(name){
      return /^[a-zA-Z' ']+$/.test(name)
    }
    
    function isPassword(password) {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/.test(password)
    }
   




