'use strict';
console.log('main.js');

const baseUrl = 'http://localhost:3000/api';
// taikomens
const postListEl = document.getElementById('posts');

async function getPosts(url) {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  makePostsList(dataInJs, postListEl);
}

getPosts(`${baseUrl}/articles`);

function makePostsList(arr, dest) {
  dest.innerHtml = '';
  arr.forEach((pObj) => {
    const liEl = document.createElement('li');
    liEl.textContent = `${pObj.author}, cat: ${pObj.category}`;
    dest.append(liEl);
  });
}
