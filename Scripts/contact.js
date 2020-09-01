const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');
const messageArea = document.getElementById('messageArea');

form.addEventListener('submit', (e) => {
    let message = [];
   
    if(!isName((name.value))|| (name.value.length <= 3)) {
       message.push('Name is invalid');
      
    }
    if (!isEmail(email.value)) {
        message.push('Email is invalid');
       
       }
    if (messageArea.value.length < 40 ) {
        message.push('Message is too short');
       
       }
    if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(', ');
    
    }
});

function isEmail(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
}
function isName(name){
    return /^[a-zA-Z' ']+$/.test(name)
}
