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
const gallery = document.querySelector('#gallery');
function addPictures ({url,alt}){
  const li = document.createElement('li');
  const link = document.createElement('a');
  const picture = document.createElement('img');
  picture.src = url;
  picture.alt = alt;
  picture.width = 450;
  picture.height = 300;
  li.style.listStyle = 'none';
  gallery.style.marginTop = '40px';
  gallery.style.display = 'flex';
  gallery.style.justifyContent = 'space-around';
  gallery.style.padding = '0';
  li.appendChild(link.appendChild(picture));
  return li
}

const elements = images.map(addPictures);
gallery.append(...elements);