
function checkLeapYear(year){
    if(year % 4==0){
        return(year + 'is leap year')
    }
    else if(year % 100==0){
        return(year  + 'is leap year')
    }
    else if(year % 400==0){
        return(year  + 'is leap year')
    }
    else{
        return(year  + 'is not leap year')
    }
}
const giveYear = checkLeapYear(2024);
console.log(giveYear);
const giveYear2 = checkLeapYear(3035);
console.log(giveYear2);
const giveYear3 = checkLeapYear(4448);
console.log(giveYear3);
const giveYear4 = checkLeapYear(4545);
console.log(giveYear4);


