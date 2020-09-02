const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if(!isName((name.value))|| (name.value.length <= 3)) {
        message.push('Name is invalid');
        document.getElementById('span1').style.display= 'inline-block';
     }
     if (!isEmail(email.value)) {
        message.push('Email is invalid')
        document.getElementById('span2').style.display= 'inline-block';
        
        
    }
     if (!isPassword(password.value)) {
        message.push('Password must contain atleast one capital letter and a number !');
         document.getElementById('span3').style.display= 'inline-block';
     
    }
     if (password.value !== confirmPassword.value) {
         document.getElementById('span4').style.display= 'inline-block';
         message.push('Password doesn\'t match');
        
    }
    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join('\n');
    }
    
});
function isName(name){
    return /^[a-zA-Z' ']+$/.test(name)
}
function isEmail(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
}
function isPassword(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
}


