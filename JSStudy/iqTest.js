function iqTest(numbers){
    var list = new Array();
    list = numbers.split(" ");
    var odd_index, even_index;
    var odd_num = 0, even_num = 0;
    for(var i = 0; i < list.length; i++){
        if(list[i] % 2 === 0){
            even_num++;
            even_index = i + 1;
        }else{
            odd_num++;
            odd_index = i + 1;
        }
        if(i>2){
            if(even_num === 1 || odd_num === 1){
                break;
            }
        }
    }
    return odd_num > even_num ? even_index : odd_index;
  }





  function iqTest_better(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }