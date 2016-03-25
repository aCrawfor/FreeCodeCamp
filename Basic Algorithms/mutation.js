/*Return true if the string in the first element of the
array contains all of the letters of the string in the
 second element of the array.*/


function mutation(arr) {
  var str1 = arr[0].toLocaleLowerCase();
  var str2 = arr[1].toLocaleLowerCase();
  var longest = str1.length <= str2.length ? str2 : str1;
  var shortest = str1 !== longest ? str1 : str2;

  for(var i =0; i < shortest.length; i++){
    var letter = shortest[i];
    if(longest.indexOf(letter) < 0){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
