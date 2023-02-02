// function getOdd(number){
//    let oddNumbers =[];
//    let sum = 0;
//     for (let i = 0; i<number.length; i++) {
//         const element = number[i];
//         if(element % 2 !==0){
//            console.log(element)
//            oddNumbers.push(element)
//            sum = sum + element;
          
//         }
//     }
  
//     console.log('Summation', sum)
//   return ('Odd Numbers', oddNumbers);

// }
// const giveArray = getOdd([12,34,55,11, 77,88,96, 33,89])
// console.log(giveArray);

//  
function getSum(array){
   let sum =0;
for (let i = 0; i < array.length; i++) {
   const element = array[i];
   sum = sum + element;
   
}
return sum;
}
const giveArray =getSum([12,33,67,88,44,91,55,27,2,47]);
console.log(giveArray);

function getOdd(array){
   let oddNumbers = []
   let sum =0
for (let i = 0; i < array.length; i++) {
   const element = array[i];
   if (element % 2 !==0) {
      oddNumbers.push(element)
      sum = sum + element;
   }

   
}
console.log('Summation', sum);
return oddNumbers;

}
const giveArraySecond =getOdd([12,33,67,88,44,91,55,27,2,47]);
console.log(giveArraySecond);

