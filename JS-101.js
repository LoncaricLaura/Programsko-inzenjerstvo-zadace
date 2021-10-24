         //JS-101
         let a = prompt("Unesi prvi broj");
         let b = prompt("Unesi drugi broj");
         let c = prompt("Unesi treći broj");
         let d = prompt("Unesi četvrti broj");
         let maks;
         // moj kod
         if (a > b && a > c && a > d) {
              maks = 'a';
         }
         else if (b > a && b > c && b > d) {
             maks = 'b';
         }
         else if (c > a && c > b && c > d) {
             maks = 'c';
         }
         else {
             maks = 'd'; 
         }
 
         console.log("Najveći između njih je: " + maks);