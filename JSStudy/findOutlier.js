function findOutlier(integers){
  integers = integers.split(" ").map(function(el){return parseInt(el)});
  var odds = integers.filter(function(el){return el % 2 === 1})
  var evens = integers.filter(function(el){return el % 2 === 0})
}