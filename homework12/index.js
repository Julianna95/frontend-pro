'use strict'

function createHash(key, secret) {
  const codeKey = key + secret;
  return btoa(codeKey);
}

console.log(createHash('key', 'secret'));
console.log(createHash('key', 'secret'));
console.log(createHash('key', 'secret'));