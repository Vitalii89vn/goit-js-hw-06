const countCategories = document.querySelectorAll('.item');
console.log('Number of categories:', countCategories.length);

const headOfList1 = document.querySelector('h2');
console.log('Category:', headOfList1.textContent);

const headOfListLength1 = headOfList1.nextElementSibling.children;
console.log('Elements:', headOfListLength1.length);

const headOfList2 = document.querySelector('ul li+li h2');
console.log('Category:', headOfList2.textContent);

const headOfListLength2 = headOfList2.nextElementSibling.children;
console.log('Elements:', headOfListLength2.length);

const headOfList3 = countCategories[countCategories.length - 1].firstElementChild;
console.log('Category:', headOfList3.textContent);

const headOfListLength3 = headOfList3.nextElementSibling.children;
console.log('Elements:', headOfListLength3.length);