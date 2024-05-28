// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

 var logEvenNums = function(num) {
     for(var i = 0; i <= num; i++){
         if (i % 2 === 0) {
             console.log(i);
         }
     }
 };

// var logEvenNums = function(num) {
//     for(var i = 0; i <= num; i++){
//         if (i % 2 !== 1) {
//             console.log(i);
//         }
//     }
// };


// var x = function (y){
//     if (y % 2 === 0){
//         return "Even";
//     } else {
//         return "Odd";
    
//     }
// }
// x(9);
