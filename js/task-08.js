const refs = {
    div : document.querySelector('#controls'),
    divBoxes : document.querySelector('#boxes'),
    input : document.querySelector('[step="1"]'),
    createBtn : document.querySelector('[data-action="render"]'),
    resetBtn : document.querySelector('[data-action="destroy"]')
}
function toGenerateColor (){
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function destroyBoxes (){
    refs.divBoxes.innerHTML = '';
    refs.input.value = '';
    counter = 20;
}

let counter = 10;

function createBoxes (number){
    number = refs.input.value;
    for(let i = 1; i <= number;i++){
        const newDiv = document.createElement('div');
        newDiv.style.width = `${20+counter}px`;
        newDiv.style.height = `${20+counter}px`;
        newDiv.style.margin = `0px auto 10px`;
        newDiv.style.backgroundColor = toGenerateColor();
        counter += 10;
        refs.divBoxes.appendChild(newDiv)
        console.log(refs.divBoxes.children.length)
    }
}

refs.createBtn.addEventListener('click' , createBoxes)
refs.resetBtn.addEventListener('click' , destroyBoxes)