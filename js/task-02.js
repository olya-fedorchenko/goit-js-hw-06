const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const newList = document.createElement('li');
  newList.textContent = ingredient;
  newList.className = 'item'
  listEl.appendChild(newList);
});

console.log(listEl)

