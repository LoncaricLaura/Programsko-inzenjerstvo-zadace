let zagrade = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.includes("[]") || s.includes("()") || s.includes("{}")) {
            s = s.replace("[]", "");
            s = s.replace("()", "");
            s = s.replace("{}", "");
            return true;
        } else {
            return false;
        }

    }
   };

   console.log(zagrade("[()]()()")); // → true
   console.log(zagrade("{[((()))]}")); // → true
   console.log(zagrade("({)}")); // → false