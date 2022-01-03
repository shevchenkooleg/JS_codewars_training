'use strict';

function printerError(s) {
  for (let i = 0; i < s.length; i++) {
    let res = (s.match(new RegExp(/[n-z]/g)) || []).length;
    return `${res}/${s.length}`;
  }  
}