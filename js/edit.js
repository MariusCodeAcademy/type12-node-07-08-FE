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
  formToFill.elements.author.value = postData.author;
  formToFill.elements.body.value = postData.body;
  formToFill.elements.category.value = postData.category;
}
// klausyti formos issiuntimo evento

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const updatedPost = {
    author: formEl.elements.author.value,
    body: formEl.elements.body.value,
    category: formEl.elements.category.value,
  };
  console.log('updatedPost ===', updatedPost);
  const resp = await sendUpdatePostRequest(updatedPost);
  console.log('resp ===', resp);
  if (resp.ok) {
    window.location.href = 'index.html';
  }
});

// submitinant forma siusti put requesta i BE
async function sendUpdatePostRequest(updatedPost) {
  const resp = await fetch(`${baseUrl}/articles/${currentPostId}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedPost),
  });
  return resp;
}
