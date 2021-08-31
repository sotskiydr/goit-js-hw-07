const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const currentList = document.querySelector('#ingredients');
const newList = document.createElement('ul');

ingredients.forEach(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  newList.appendChild(li)
});
currentList.replaceWith(newList);