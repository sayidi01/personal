const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const button = document.querySelector("button")
const errName = document.querySelector("#errName");
const errEmail = document.querySelector("#errEmail");
const errNumber = document.querySelector("#errNumber")



function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}


function validateName(name) {
    const nameRegex = /([a-zA-Z0-9_\s]+)/
    return nameRegex.test(name);
}

function validateNumber(number) {
    let moroccanPhoneNumberPattern = /^(05|06|07)[0-9]{8}$/;
    return moroccanPhoneNumberPattern.test(number);
}

button.addEventListener('click',() =>{
    const myName = name.value 
    const myEmail = email.value
    const myphoneNumber = phoneNumber.value 

    if (validateName(myName)){
        
        errName.style.display = 'none';
    } else{
        errName.style.display = 'inline';
    }

    if(validateEmail(myEmail)){
        
errEmail.style.display = 'none'
}else {
    errEmail.style.display = 'inline'
}
    
    if(validateNumber(myphoneNumber)){
        
errNumber.style.display = 'none'

}else{
   
    errNumber.style.display = 'inline'
    }
})

errName.style.display = 'none';
errEmail.style.display = 'none'
errNumber.style.display = 'none'

