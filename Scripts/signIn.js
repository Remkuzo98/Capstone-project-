const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if(name.value.length < 6 ){
        message.push('Name is too short'); 
       
    }
    if (!isPassword(password.value)) {
      message.push('Password must contain atleast one capital letter and a number !')
    }
    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(',');
    }      
});

function isPassword(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
}
