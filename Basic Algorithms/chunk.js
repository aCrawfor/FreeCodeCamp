/*Write a function that splits an array (first argument)
 into groups the length of size (second argument) and
 returns them as a two-dimensional array.*/


function chunk(arr, size) {

  var begin = 0;
  var end = size;
  var chunkArr = [];
  var sub = [];
  while(begin < arr.length){
    sub = arr.slice(begin, end);
    chunkArr.push(sub);
    begin = end;
    end += size;
  }
  return chunkArr;
}

chunk(["a", "b", "c", "d"], 2);
