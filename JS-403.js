let openers = "{[(";
let  following = {
    "[": "]",
    "{": "}",
    "(": ")",
};

let zagrade = function(s) {
    let stack = [];
    for (let i of s) {
        if (openers.includes(i)) {
            stack.push(following[i]);
        } else {
            if (stack.pop() != i) {
                return false;
            }
        }
    }
    return true;
   };

   console.log(zagrade("[()]()()")); // → true
   console.log(zagrade("{[((()))]}")); // → true
   console.log(zagrade("({)}")); // → false