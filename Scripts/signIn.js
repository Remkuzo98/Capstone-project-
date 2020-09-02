const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if(!isName((name.value))|| (name.value.length <= 3)) {
        message.push('Name is invalid');
       
     }
    if (!isPassword(password.value)) {
      message.push('Password must contain atleast one capital letter and a number !');
    }
    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(',');
    }      
});

function isName(name){
    return /^[a-zA-Z' ']+$/.test(name)
}
function isPassword(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
}



