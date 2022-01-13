
function fakeBin(x){
    let res = '';
    for (elem of x) {
      if (elem < 5) {
        res += 0;
      } else {
        res += 1;
      }
    };
    return res;
  }