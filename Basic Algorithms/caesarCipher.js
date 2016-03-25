/*Write a function which takes a ROT13
encoded string as input and returns a decoded string.*/



function decode(int, shift, max, length){
  var val = int + shift;
  if(val > max){
    val -= length;
  }
  return val;
}

function isAlpha(character){
  var code = character.charCodeAt(0);
  var min = "A".charCodeAt(0);
  var max = "Z".charCodeAt(0);
  if(code < min || code > max){
    return false;
  }
  return true;
}

function cipher(letter){
  //Cipher letters using ASCII values
  var maxCode = "Z".charCodeAt(0);
  var originalCode = letter.charCodeAt(0);
  var decodedCode = originalCode;

  if(isAlpha(letter)){
    decodedCode = decode(originalCode, 13, maxCode, 26);
  }
  return String.fromCharCode(decodedCode);
}

function rot13(str) { // LBH QVQ VG!
  var decoded = [];
  for(var i=0; i < str.length; i++){
    var encodedChar = str.charAt(i);
    var decodedChar = cipher(encodedChar);
    decoded.push(decodedChar);
  }
  return decoded.join("");
}

// Change the inputs below to test
rot13("SERR YBIR?");

