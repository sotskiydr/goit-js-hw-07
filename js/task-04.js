const refs = {
    counter : document.querySelector('#value'),
    decrement : document.querySelector('[data-action="decrement"]'),
    increment : document.querySelector('[data-action="increment"]')
}
refs.decrement.addEventListener('click',onClickBtnDecrement)
refs.increment.addEventListener('click',onClickBtnIncrement)
let counterValue = 0;

function onClickBtnDecrement(){
    counterValue -= 1;
    refs.counter.innerHTML = counterValue;
}
function onClickBtnIncrement(){
    counterValue += 1;
    refs.counter.innerHTML = counterValue;
}
