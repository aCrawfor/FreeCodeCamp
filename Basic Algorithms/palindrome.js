/*Return true if the given string is a palindrome.
 Otherwise, return false.*/


function palindrome(str) {
    if(str === ""){
    return true;
    }
    var reg = /\s+|\W|_/g;
    str = str.toLowerCase().replace(reg,"");
    var reverse = str.split("").reverse().join("");

    return reverse.localeCompare(str) === 0 ? true : false;
}


palindrome("0_0 (: /-\ :) 0-0");
