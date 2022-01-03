'use strict';

function rot13(message) {
  let res = [];
  let orign = [];
  for (let i = 0; i < message.length; i++) {
    orign.push(message.slice(i).charCodeAt(0));
    if (message.slice(i).charCodeAt(0) >= 97 && message.slice(i).charCodeAt(0) <= 122) {
      if (((message.slice(i).charCodeAt(0)) + 13) > 122) {
        res.push((((message.slice(i).charCodeAt(0)) + 13) - 122) + 96);
      } else {
        res.push((message.slice(i).charCodeAt(0)) + 13);
      }
    } else if (message.slice(i).charCodeAt(0) >= 65 && message.slice(i).charCodeAt(0) <= 90) {
      if (((message.slice(i).charCodeAt(0)) + 13) > 90) {
        res.push((((message.slice(i).charCodeAt(0)) + 13) - 90) + 64);
      } else {
        res.push((message.slice(i).charCodeAt(0)) + 13);
      }
    } else {
      res.push(message.slice(i).charCodeAt(0));
    }
    
  }
//   console.log(orign);
//   console.log('_______')
//   console.log(res);
  let r = '';
  for (let j = 0; j < res.length; j++) {
    r += String.fromCharCode(res[j]);
  }
//   console.log(r);
  return r;
}