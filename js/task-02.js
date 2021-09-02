const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const currentList = document.querySelector('#ingredients');
const arrEl = [];
ingredients.map(elem => {
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  arrEl.push(liEl)
})
currentList.append(...arrEl)