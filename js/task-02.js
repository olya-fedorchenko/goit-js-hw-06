const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const makeListWithIngredients = (items) => {
  return items.map(item => {
    const newList = document.createElement('li');
    newList.className = 'item';
    newList.textContent = item;
    return newList;
   
  })
}

const elements = makeListWithIngredients(ingredients)
const listEl = document.querySelector('#ingredients');
listEl.append(...elements);
console.log(listEl)