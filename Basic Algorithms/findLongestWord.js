/*
Return the length of the longest word in the provided sentence.*/

function findLongestWord(str) {
  var strArr = str.split(" ");
  var strLnArr;
  strLnArr = strArr.sort(function(prev, current){
        return current.length - prev.length;
  });

  return   strLnArr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
