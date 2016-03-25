/*Truncate a string (first argument) if it is
longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
However, if the given maximum string length num is less
than or equal to 3, then the addition of the three dots does
not add to the string length in determining the truncated string.*/

function truncate(str, num) {

  if(str.length <= num) return str;

  var truncate = "";
  var cutoff = num;

  if(num >= 3){
    cutoff -= 3;
  }
  truncate = str.slice(0, cutoff) + "...";
  return truncate;
}

truncate("Peter Piper picked a peck of pickled peppers", 14);
