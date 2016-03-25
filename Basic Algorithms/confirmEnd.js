/*Check if a string (first argument, str)
 ends with the given target string (second argument, target).*/

function end(str, target) {

  if(str === "") return false;
  if(target === "") return true;

  var subStringStartIndex = target.length;

  return str.substr(-subStringStartIndex) === target;

}

end("Bastian", "n");