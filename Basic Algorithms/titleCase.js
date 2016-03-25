/*
Return the provided string with the first letter of each word capitalized.*/
function titleCase(str) {
  var strArr = str.split(" ");

  var upStrArr = strArr.map(function(val){
    return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
     });

  upStrArr = upStrArr.join(" ");
  return upStrArr;
}

titleCase("I'm a little tea pot");
