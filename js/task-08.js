const refs = {
    div : document.querySelector('#controls'),
    divBoxes : document.querySelector('#boxes'),
    input : document.querySelector('[step="1"]'),
    createBtn : document.querySelector('[data-action="render"]'),
    resetBtn : document.querySelector('[data-action="destroy"]')
}
refs.createBtn.addEventListener('click' , createBoxes)
refs.resetBtn.addEventListener('click' , destroyBoxes)

function toGenerateColor (){
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function destroyBoxes (){
    refs.divBoxes.innerHTML = '';
}

let counter = 10;

function createBoxes (amount){
    const divsOnBox = refs.divBoxes.children.length;
    amount = (refs.input.value - 1);
    const newDiv = document.createElement('div');
    refs.divBoxes.append(newDiv);
    newDiv.style.width = `${20+counter}px`;
    newDiv.style.height = `${20+counter}px`;
    newDiv.style.margin = `0px auto 10px`;
    counter += 10;
    newDiv.style.backgroundColor = toGenerateColor();
    if(divsOnBox < amount && amount != 0){
        createBoxes()
    }
}