const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul');

const addListIngredients = ingredients.map(element => {

  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add('item');
  return ingredientsItem;
  });
  
listIngredients.append(...addListIngredients);

console.log(addListIngredients);