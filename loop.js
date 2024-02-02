let i = 1;
while(i<=200){
    // console.log(i);
    if(i==100){
        break;
    }
    i++;
}
// Task 2**********
let n = 1;
let sum = 0;
while(n<100){
    if(sum>=100){
        break;
    }
    sum = sum + n;
    n++;
}
// console.log(sum);

let squre = 1;

while(squre<=100){
    if(squre > 1 && Number.isInteger(Math.sqrt(squre))){
        break;
    }
    // console.log(squre);
    squre++;
}


for (let number = 1; number <= 100; number++) {
//     console.log(number);

    if (number > 1 && Number.isInteger(Math.sqrt(number))) {
        break;
    }
}
