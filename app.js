// Blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postal').addEventListener('blur', validatePostal);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e){
    const name = e.target.value;
    const pattern = /^[a-zA-Z]{2,10}$/;
    if(!pattern.test(name) && !e.target.classList.contains('is-invalid')){
        e.target.classList.add('is-invalid');
    } else if(pattern.test(name) && e.target.classList.contains('is-invalid')){
        e.target.classList.remove('is-invalid')
    }
}

function validatePostal(e){

}

function validateEmail(e){

}

function validatePhone(e){

}