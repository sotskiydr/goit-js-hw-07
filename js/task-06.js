const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');
input.addEventListener('blur', onBlurInputArea);

function onBlurInputArea (){
    if(dataLength != input.value.length){
        input.classList.remove('valid');
        input.classList.add('invalid');
    }else{
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}