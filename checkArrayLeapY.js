function checkLeapYear(year) {
    let leapYear = [];
    for (let i = 0; i < year.length; i++) {
        const yearInputs = year[i];
        if (yearInputs % 4 == 0 || yearInputs % 100 == 0 || yearInputs % 400 == 0) {
            // if(yearInputs % 4 ==0){
            leapYear.push(yearInputs);
        }
    }
    return leapYear;
}
const giveYear = checkLeapYear([2023, 2024, 2025, 2028, 2030, 4545, 2012])
console.log(giveYear);

