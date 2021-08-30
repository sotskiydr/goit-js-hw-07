const refs = {
    input : document.querySelector('#font-size-control'),
    out : document.querySelector('#text')
}
refs.input.value = parseInt(window.getComputedStyle(refs.out).fontSize);

refs.input.addEventListener('input', onChangeInputRange);
function onChangeInputRange (event){
    refs.out.style.fontSize = `${event.currentTarget.value}px`;
}