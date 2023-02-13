// The First solution 

function WordCount(str) {
  var totalSoFar = 0;
  for (var i = 0; i < WordCount.length; i++)
    if (str.charAt(i) === " ") { // if a space is found in str
      totalSoFar = +1; // add 1 to total so far
  }
  return totalsoFar // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}

console.log(WordCount('ok'));



// The Second solution 

function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("Random String"));