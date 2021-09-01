const categories = document.querySelector('#categories');
const item = categories.children;
const itemArray = Array.from(item)
console.log(`В списке ${categories.children.length} категории.`)
itemArray.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
    console.log('========================')
})