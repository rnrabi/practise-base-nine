// Task reverse the colors by using reverse methoe.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverse = colors.reverse();
// console.log(reverse);

// Task 2 fin the even number by using looping technique
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for(let even of numbers){
    if(even%2==0){
        evenNumber.push(even);
    }
}
// console.log(evenNumber);
// Task 3 concate of array element. ********
const number = ['Tom', 'Tim', 'Tin', 'Tik'];
let cncat ='';
for(let num of number){
   cncat = cncat.concat(num);
}
// console.log(cncat);
// Task 4 chenge the wor from the statement. 
const statement = 'I am a hard working person';
const stageArray =statement.split(" ");
const reveserStageArray = stageArray.reverse();
const result = reveserStageArray.join(" ");
// console.log(result)