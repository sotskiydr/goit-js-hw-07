const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const currentList = document.querySelector('#ingredients');

ingredients.forEach(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  currentList.appendChild(li)
});