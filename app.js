// Blur event listeners
document.getElementById('name').addEventListener('blur', validate);
document.getElementById('postal').addEventListener('blur', validate);
document.getElementById('email').addEventListener('blur', validate);
document.getElementById('phone').addEventListener('blur', validate);

function validate(e){
    const input = e.target.value;
    let pattern;

    if(e.target.id === 'name'){
        pattern = /^[a-z]{2,10}$/i;
    } else if(e.target.id === 'postal'){
        pattern = /^(?!.*[DFIOQU])[A-VXY]\d[A-Z] ?[0-9][A-Z][0-9]$/i;
    } else if(e.target.id === 'email'){
        pattern = /^(?!\.)(?!.*\.{2})([a-zA-Z0-9!#$%&'*-+/=?^_`.{|}~]){1,64}@([a-zA-Z0-9\-]{1,63}\.){1,3}([a-zA-Z]{2,5})$/;
    } else if(e.target.id === 'phone'){
        pattern = /^(\d{3} ?){2}\d{4}$/;
    }

    if(!pattern.test(input) && !e.target.classList.contains('is-invalid')){
        e.target.classList.add('is-invalid');
    } else if(pattern.test(input) && e.target.classList.contains('is-invalid')){
        e.target.classList.remove('is-invalid')
    }
}