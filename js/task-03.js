const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const makeImagesEl = images.map(({ url, alt }) => {
 return `<li class="list"><img src="${url}" alt="${alt}" width="1200" class="img-list"></li>`;
}).join('')

const listImages = document.querySelector('ul');
listImages.insertAdjacentHTML('afterbegin', makeImagesEl)



console.log(makeImagesEl)




// const addImages = images.map(image => {
//   const imageList = document.createElement('li');
//   const imageItem = document.createElement('img');
//   imageItem.src = image.url;
//   imageItem.alt = image.alt;
//   imageItem.classList.add('img-list');
//   imageList.appendChild(imageItem);
//   return imageList;
// })
// listImages.append(addImages);

// console.log(addImages);

