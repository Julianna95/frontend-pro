'use strict'
/*
function createHash(key, secret) {
  return key + secret;
}

const key = prompt('Enter some key');
const secret = '223344';
const hash = createHash(key, secret);
console.log(hash); 
const hash2 = createHash(key, secret);
console.log(hash2); 
const hash3 = createHash(key, secret);
console.log(hash3); 
*/
function createHash(key, secret) {
  const codeKey = key + secret;
  return btoa(codeKey);
}


console.log(createHash('key', 'secret'));
console.log(createHash('key', 'secret'));
console.log(createHash('key', 'secret'));