'use strict';

function computerToPhone(numbers){
    const keys = {
      '1': '7',
      '2': '8',
      '3': '9',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '1',
      '8': '2',
      '9': '3',
      '0': '0'
    };
    
  let res = '';  
  for (let elem of numbers) {
    res += keys[elem];
  }
  return res;  
  }