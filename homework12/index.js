'use strict'

function createHash(key, secret) {
  return key + secret;
}

const key = prompt('Enter some key');
const secret = 'aa22bb33';
const hash = createHash(key, secret);
console.log(hash); 
const hash2 = createHash(key, secret);
console.log(hash2); 
const hash3 = createHash(key, secret);
console.log(hash3); 