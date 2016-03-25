/*Remove all falsy values from an array.
  Falsy values in JavaScript are false, null,
  0, "", undefined, and NaN.*/

function isTruthy(obj){

  if( typeof obj === "undefined" || obj === "" || obj === null || obj === 0 || obj === false ){
    return false;
  }
  if(typeof obj !== "string" && isNaN(obj)){
    return false;
  }
  return true;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(isTruthy);
  return filtered;
}

bouncer(["a", "b", "c"]);