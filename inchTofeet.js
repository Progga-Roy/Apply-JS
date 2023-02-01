// inch to feet convert

const myInch = 12;
const myFeet = myInch/12;
console.log(myFeet);


const dadaInch =144;
const dadaFeet = dadaInch/12;
console.log(dadaFeet);

const dadiInch = 90;
const dadiFeet = dadiInch/12;
console.log('Dadi feet',dadiFeet);

// using function to convert inch to feet

function convertInchtoFeet(inches){

    const feet = inches/12;
    return feet;

}
const giveInches = convertInchtoFeet(140)
console.log(giveInches);


const myRealInch = convertInchtoFeet(150)
console.log('My inches',myRealInch);


// mile to kilometer

function convertMeletokilometer(miles){

const kilometer = miles *1.60934;
return kilometer;

}
const giveKilo = convertMeletokilometer(4);
console.log('Kilometer', giveKilo);