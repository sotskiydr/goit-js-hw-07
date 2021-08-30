const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');
ingredients.forEach(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  ul.appendChild(li)
});


