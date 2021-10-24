         //JS-102
         let bodovi = prompt("Unesi broj bodova");
         let ocjena;
         let poruka;
         // moj kod
         if (bodovi < 50) {
             ocjena = 1;
         }
         else if (bodovi >= 50 && bodovi < 63) {
             ocjena = 2;
         }
         else if (bodovi >= 63 && bodovi < 76) {
             ocjena = 3;
         }
         else if (bodovi >= 76 && bodovi < 89) {
             ocjena = 4;
         }
         else {
             ocjena = 5;
         }
 
         if (ocjena > 1) {
             console.log('Čestitam! Uspješno ste položili koelgij s ocjenom '+ ocjena);
         }