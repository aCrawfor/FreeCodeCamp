/*Return the lowest index at which a value (second argument)
 should be inserted into an array (first argument)
 once it has been sorted.*/

function where(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){
      return a-b;
  });

  var index = arr.indexOf(num);
  return index;
}

where([3, 10, 5], 3);
