'use strict';
console.log('edit.js');

// html sukurti 3 ivesties laukus, author, categorija ir body

// js gauti query parametra
const currentPostId = new URLSearchParams(window.location.search).get('postId');
console.log('currentPostId ===', currentPostId);
// parsisiusti su fetch posta su id is query params

// supildyti formos laukus su posto info

// klausyti formos issiuntimo evento

// submitinant forma siusti put requesta i BE
