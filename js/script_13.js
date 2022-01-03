'use strict';

function expandedForm(num) {
  let res = [];
  let n = num;
  let i = 0;
  while (n > 0) {    
//       console.log(num);    
      let numLen = String(n).length;
      res.push(String(n)[0]+'0'.repeat(numLen - 1));
//       console.log(Number(res[i]));
      n = n - Number(res[i]);
      i++;
  }
//   console.log(res);
  let r = res.join(' + ');
  return r;
}