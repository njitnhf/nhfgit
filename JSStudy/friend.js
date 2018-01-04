function friend(friends) {
    var arr = [];
    //for(var i = 0; i < friends.length; i++){
    //   if(friends[i].length == 4){
    //    arr.push(friends[i]);
    //    }
    // }
    arr = friends.filter(findFriends);
    return arr;
}
var findFriends = el => el.length == 4;

//function findFriends (el){
//  return el.length == 4;
//}



function friend_1(friends) {
    return friends.filter(n => n.length === 4)
}