'use strict';
console.log('edit.js');

const baseUrl = 'http://localhost:3000/api';

// html sukurti 3 ivesties laukus, author, categorija ir body

// js gauti query parametra
const currentPostId = new URLSearchParams(window.location.search).get('postId');
console.log('currentPostId ===', currentPostId);

// Taikomes
const formEl = document.forms[0];

// parsisiusti su fetch posta su id is query params
async function getPost(url) {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  // console.log('dataInJs ===', dataInJs);
  fillFormWithData(dataInJs, formEl);
}
getPost(`${baseUrl}/articles/${currentPostId}`);
// supildyti formos laukus su posto info
function fillFormWithData(postData, formToFill) {
  console.log('postData ===', postData);
}
// klausyti formos issiuntimo evento

// submitinant forma siusti put requesta i BE
