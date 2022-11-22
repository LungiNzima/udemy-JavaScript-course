'use strict';

const calcTip = function (bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[0])];
console.log(bills, tips);

// Test 1
// const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;
// let scoreDolphins = calcAverage(44, 23,71);
// let scoreKoalas= calcAverage(65, 54,49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win! 🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win! 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins.`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas= calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);
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

/* const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
console.log(friends);
friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
} */

// const years = new Array(1991, 1984, 2000, 2020);
// console.log(years);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// const firstName = 'Lungi';
// const lungi = [firstName, 'Nzima', 2020 - 1993, 'teacher, friends'];
// console.log(lungi);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
