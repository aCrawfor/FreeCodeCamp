/*Repeat a given string (first argument) num times (second argument).
Return an empty string if num is a negative number.*/

function repeat(str, num) {

  if(num <= 0 || str === '') return "";

  return str.repeat(num);
}

repeat("abc", 3);
