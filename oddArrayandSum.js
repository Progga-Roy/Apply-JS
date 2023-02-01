function getOdd(number){
   let oddNumbers =[];
   let sum = 0;
    for (let i = 0; i<number.length; i++) {
        const element = number[i];
        if(element % 2 !==0){
           console.log(element)
           oddNumbers.push(element)
           sum = sum + element;
          
        }
    }
  
    console.log('Summation', sum)
  return ('Odd Numbers', oddNumbers);

}
const giveArray = getOdd([12,34,55,11, 77,88,96, 33,89])
console.log(giveArray);
