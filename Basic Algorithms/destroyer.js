/*You will be provided with an initial array
(the first argument in the destroyer function),
 followed by one or more arguments. Remove all elements
 from the initial array that are of the same value as
 these arguments.*/

function destroy(arr){
 return function(element){
     return arr.indexOf(element) < 0;
 };
}

function destroyer() {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  var arr = args[0];
  var destroyObjArr = args.slice(1);

  arr = arr.filter(destroy(destroyObjArr));

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);