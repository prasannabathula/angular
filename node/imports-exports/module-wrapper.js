//IIME ---inside variables anything defined becomes private

(function () {
   var name="harshu";
   console.log(name);
})();
//console.log(name); //it will throw error like name is not defined

//by default node adds IIME around the complete file code
(function (exports, require, module, __filename, __dirname) {
/*  const fs = require('fs');  
    module.exports.name = "harshu";
    console.log(__filename);
    console.log( __dirname); */
  })();
  console.log(__filename);
  console.log( __dirname);
