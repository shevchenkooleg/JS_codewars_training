'use strict';

function disemvowel(str) {

    let vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    };
  
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let letter = str[i].toLowerCase();
      if (!vowels[letter]) {
        result += str[i];
      }
    };
    return result;
  };