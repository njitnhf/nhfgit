function inArray(a1, a2) {
    var ans_arr = [];
    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < a2.length; j++) {
            if (RegExp(a1[i]).test(a2[j]) && a1[i] != undefined) {
                ans_arr.push(a1[i]);
                break;
            }
        }
    }
    return ans_arr.sort();
}

/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
 */

function inArray(arr1, arr2) {
    return arr1.filter(function (needle) {
        return arr2.some(function (haystack) {
            return haystack.indexOf(needle) > -1;
        });
    }).sort();
}


function inArray(a1, a2) {
    return a1
        .filter(a1 => a2.find(a2 => a2.match(a1)))
        .sort()
}
