function factorial(num) {
  let result = '';
  if(num === 0){
    return 1;
  }else{
    return result = num * factorial(num - 1);
  }
}

module.exports = factorial;

