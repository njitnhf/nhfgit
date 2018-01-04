function solution(digits){
    if(digits.length < 6){
      return Number(digits);
    }
    
    var answer = 0;
    answer = digits.substr(0,5);
    for(var i = 1; i < digits.length-4; i++){
      if(answer < digits.substr(i,5)){
        answer = digits.substr(i,5); 
      }
    }
    return Number(answer);
  }



  function solution(digits){
    if (digits.length <= 5){
        return Number(digits);
    }
    return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}