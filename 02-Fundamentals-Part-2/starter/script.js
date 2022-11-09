'use strict';

// Test 1
const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;
let scoreDolphins = calcAverage(44, 23,71);
let scoreKoalas= calcAverage(65, 54,49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins.`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas= calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';

// function logger() {
//   console.log('My name is Lungi');
// }

// logger();
// logger();

// function fruitProcessor(apples,oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

/* // Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
 console.log(age1, age2); */

/*  // Arrow Function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993,'Lungi')); */

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);

//    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}
//    pieces of orange.`;
//    return juice;
// }

// console.log(fruitProcessor(2,3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`)
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1993, 'Lungi'));
