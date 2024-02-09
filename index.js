const inputfield= document.querySelector('#password')
const outputfield= document.querySelector('#output')

inputfield.addEventListener('input',function(){
    console.log(inputfield.value);
    let password = inputfield.value;
    if(password.length<8){
        outputfield.innerText='Password is to short';
        outputfield.style.color='red'
    }else{
        // outputfield.innerText='Password is to long enough';
        // outputfield.style.color='green'
        if(password.search(/[a-z]/)==-1){
            outputfield.innerText = 'Password is missing a lowercase letter';
            outputfield.style.color='red'
        }else if(password.search(/[A-Z]/)==-1){
            outputfield.innerText = 'Password is missing a Uppercase letter';
            outputfield.style.color='red'
        }else if(password.search(/[0-9]/)==-1){
            outputfield.innerText = 'Password is missing a numeric letter';
            outputfield.style.color='red'
        }

        else{
            outputfield.innerText='Password is strong';
        outputfield.style.color='green'
        }
    }
    
})