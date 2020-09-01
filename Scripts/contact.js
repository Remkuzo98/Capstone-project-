const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if (!isEmail(email.value)) {
     message.push('Email is not valid');
     document.getElementById('span').style.display= 'inline-block';
    }
    if((typeof(name.value) !== String )|| (name.value.length <= 3)) {
       message.push('Name is invalid');
       document.getElementById('span').style.display= 'inline-block';
    }
    if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(', ');
    
    }
});

function isEmail(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
}