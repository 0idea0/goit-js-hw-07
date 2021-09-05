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

const ulEl = document.querySelector('ul');
ulEl.classList.add('list_images');
console.log(ulEl);

const itemEl = ({ url, alt }) => {
  return `<li><img class = "item_images" src = ${url} alt = ${alt} width="450px" height="300px"><li>`;
};

const listEl = images.map(itemEl).join('');
console.log(listEl);

ulEl.insertAdjacentHTML('beforeend', listEl);


ulEl.style.marginTop = '30px';
ulEl.style.display = 'block';
ulEl.style.alighnItens = 'center';
ulEl.style.padding = '0';
ulEl.style.listStyle = 'none';