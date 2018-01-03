function findOutlier(integers){
  //integers = integers.split(" ").map(function(el){return parseInt(el)});
  var odds = integers.filter(function(el){return abs(el) % 2 === 1});
  var evens = integers.filter(function(el){return abs(el) % 2 === 0});
  return odds.length < evens.length ? odds[0] : evens[0];
}



function findOutlier(integers){
  var hash_flag =[1,1,1,0,1,0,0,0];
   for(var i=0;i<integers.length;i++)
   {
     if((integers[i]&1) == hash_flag[(integers[0]&1)*4+(integers[1]&1)*2+(integers[2]&1)*1])
       return integers[i];
   }
 }