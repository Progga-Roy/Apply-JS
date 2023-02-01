
function getSum(numArr){
  let sum = 0;
    for(let i =0 ;i<numArr.length;i++){
        let arrItems = numArr[i];
        sum = sum+arrItems;
        
    }
    return ('Array Sum ', sum);
}
 const giveArray =getSum([34,67,55,90,11,67,19,79,23,100]);
 console.log(giveArray)