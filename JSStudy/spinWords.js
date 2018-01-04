function spinWords(str) {
    //TODO Have fun :)
    var str_arr = [];
    var answer = "";
    str_arr = str.split(" ");
    for (var i = 0; i < str_arr.length; i++) {
        if (str_arr[i].length >= 5) {
            str_arr[i] = str_arr[i].split("").reverse().join("");
        }
        answer += str_arr[i] + " ";
    }
    return answer.substr(0, answer.length - 1);
}


/**
 * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
 */