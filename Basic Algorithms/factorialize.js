/*Return the factorial of the provided integer.*/

function factorialize(num) {
  if(num === 0){
    num = 1;
  }
  num *= factorialize(num-1);


  return num;
}

factorialize(5);
