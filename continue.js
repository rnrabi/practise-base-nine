for (let i = 1; i <= 40; i++) {
    if (i % 2 === 1) {
        continue;
    }
    // console.log(i);
}
for (let n = 55; n <= 85; n++) {
    if (n % 2 === 0 || n % 5 === 0) {
        continue;
    }
    // console.log(n);
}
// ************************
for (let i = 1; i <= 60; i++) {
    // console.log("I will invest at least 6 hrs every single day for next 60 days!");
}
// ****Display sum of all the odd numbers from 91 to 129***
let sum = 0;
for (let s = 91; s <= 129; s+=2) {
    sum=sum +s;
// if(s%2===1){
//     sum=s+sum;
// }
}
// console.log(sum)
// task count own********** 

let count =81;
const timer = setInterval(function(){
    // console.log(count);
    count--;
    if(count ===64){
        clearInterval(timer);
        // console.log('your registration time is over')
    }
}, 1000)


// Loop from 1 to 10 for multiplication factors
for (let i = 1; i <= 10; i++) {
    // Calculate the product of 9 multiplied by the current factor
    let result = 9 * i;
    
    // Display the result in the console
    // console.log(`9 * ${i} = ${result}`);
  }
// countown or multiplication of 5 use  while loop
let countlow = 50;
const timers = setInterval(function(){
// console.log(countlow);
countlow--;
if(countlow === 39){
    // console.log('all is ok')
    clearInterval(timers);
}
},1000)

let multi = 1;
while(multi<=10){
    let resultMulti = 9 * multi;
    // console.log(`9 * ${multi} = ${resultMulti}`)
    multi++;
}