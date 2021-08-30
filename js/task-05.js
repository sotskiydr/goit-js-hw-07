const refs = {
    input : document.querySelector('#name-input'),
    out : document.querySelector('#name-output')
}
refs.input.addEventListener('input',onEnterInputArea);

function onEnterInputArea (event){
    refs.out.textContent = event.currentTarget.value;
    if(refs.out.textContent.length === 0){
        refs.out.textContent = 'незнакомец';
    }
}