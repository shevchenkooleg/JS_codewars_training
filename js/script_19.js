'use strict';

function count (string) {  
  let dict = {};
  for (let i = 0; i < string.length; i++) {
    if (typeof dict[string[i]] !== "undefined") {
      dict[string[i]] += 1;
    } else {
      dict[string[i]] = 1;
    }
  }  
  return dict;
}