const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    let message = [];
    if(name.value.length < 6 ){
        e.preventDefault();
        document.getElementById('span1').style.display= 'inline-block';
        alert('Your name must be atleast 6 or more chaaracters')
        
    }
     if (!isEmail(email.value)) {
        e.preventDefault();
        document.getElementById('span2').style.display= 'inline-block';
        alert('Email is not valid')
        
    }
     if (!isPassword(password.value)) {
         e.preventDefault();
         document.getElementById('span3').style.display= 'inline-block';
     alert('Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
     
    }
     if (password.value !== confirmPassword.value) {
         e.preventDefault();
         document.getElementById('span4').style.display= 'inline-block';
         alert('Password doesn\'t match');
        
    }
    
});

function isPassword(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
}
function isEmail(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
}
function display() {
    
    return (x,y)
}