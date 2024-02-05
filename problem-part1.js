// Task 1 Write a function to convert temperature from Celsius to Fahrenheit.
function convertCelToFahrnt(celsius) {
    const fahrent = (9 / 5) * celsius + 32;
    const result = parseFloat(fahrent.toFixed(2));
    return result;
}

const cel = convertCelToFahrnt(37);
// console.log(cel);

// Task 2 You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5];

function samilar(num) {
    let count = 0;
    for (const num1 of numbers) {
        if (num1 === num) {
            count++; //count = count +1;
        }
    }
    return count;
}

const samilarNumber = samilar(5);
// console.log(samilarNumber);

// Task 3 Write a function to count the number of vowels in a string.

const vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowel(str) {
    const strArray = str.split("");
    let countV = 0;
    for (const strVowel of strArray) {
        if (vowels.includes(strVowel)) {
            countV = countV + 1;
        }
    }
    return countV;
}
const vowelResult = countVowel('rabi lion');
// console.log(vowelResult);

// Task-4  Write a function to find the longest word in a given string.
// sample-output: Programming

const largeStr = 'I am learning Programming to become a programmer';

function longest(largeStrWor) {
    const worArray = largeStr.split(" ");
    let lrgWor = '';
    for (const lrg of worArray) {
        if(lrg.length > lrgWor.length){
            lrgWor = lrg;
        }
    }
    return lrgWor;
}

const stringWor = longest(largeStr);
// console.log(stringWor);
// Task-5 Generate a random number between 10 to 20.



var randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber);
