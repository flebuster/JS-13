function sum(a) {

    let currentSum = a;
  
    function func(b) {
      currentSum += b;
      return func;
    }
  
    func.toString = function() {
      return currentSum;
    };
  
    return func;
  }
  
console.log( sum(13)(5) );
console.log( sum(48)(-7) );