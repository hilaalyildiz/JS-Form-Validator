const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');

function error(input, message){
    input.className='form-control is-invalid';

    const div = input.nextElementSibling;
    div.innerText = message;
    div.className ='invalid-feedback';
}

function success (input){
    input.className='form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)){
        success(input);
    } else {
        error(input, 'Email must be in the correct format');
    }
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} must be entered`);
        } else {
            success(input);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length < min){
        error(input, `${input.id} Must be at least ${min} characters`);
    } else if(input.value.length > max) {
        error(input, `${input.id} Must be at most ${max} characters`);
    } else {
        success(input);
    }
}

function checkPasswords(input1,input2){
    if(input1.value !== input2.value)
        error(input2,'Passwords do not match');
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value))
        error(input, 'Phone must be at least 10 characters');
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
    
    /*** 
    if(username.value === ''){
        error(username,'Username must be entered');
    } else {
        success(username);
    }

    if(email.value === ''){
        error(email, 'Email must be entered');
    } else if (!validateEmail(email.value)){
        error(email, 'Email must be in the correct format');
    }
    else {
        success(email);
    }

    if(password.value === ''){
        error(password, 'Password must be entered');
    } else {
        success(password);
    }

    if(repassword.value === ''){
        error(repassword, 'Password must be again entered');
    } else {
        success(repassword);
    } ***/
});