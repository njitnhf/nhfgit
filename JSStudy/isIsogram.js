/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
 */


function isIsogram(str){
    if(str == ""){
      return true;
    }
    var str_arr = [];
    var answer = true;
    str_arr = str.toLowerCase().split("");
    for(var i = 0; i < str_arr.length; i++){
      for(var j = 0; j < i; j++){
        if(str_arr[j] == str_arr[i]){
          answer = false;
          break;
        }
      }
    }
    return answer;
  }



  function isIsogram_1(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //z.