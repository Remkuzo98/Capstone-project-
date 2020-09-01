const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if(name.value.length < 6 ){
        alert('Your name must be atleast 6 or more chaaracters')
        e.preventDefault();
        document.getElementById('span').style.display= 'inline-block';  
    }
    if (!isPassword(password.value)) {

     alert('Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
     e.preventDefault();
     document.getElementById('span').style.display= 'inline-block';
    }
});

function isPassword(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
}