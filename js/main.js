'use strict';
console.log('main.js');

const baseUrl = 'http://localhost:3000/api';
// taikomens
const postListEl = document.getElementById('posts');

async function getPosts(url) {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
}

getPosts(`${baseUrl}/articles`);
