const strng = 'kamal vai aaa kalmi';
let countOfA=0;
for(let i=0; i<strng.length ; i++){
    let letter = strng[i];
    if(letter === 'a'){
        countOfA = countOfA + 1;
        // countOfA++; ******* this is bikolpo of countOfA = countOfA+1
    }
}
// console.log(countOfA);

// Task 3 check the all vowels in a string. 
const vowels = 'eucation';
let vowelArray = ['a', 'e' , 'i' , 'o', 'u'];
let allVowel = true;
for(let v=0; v<vowelArray.length ; v++){
    let ixNum = vowels.indexOf(vowelArray[v]);
    if(ixNum === -1){
        allVowel = false;
        break;
    }
}

if(allVowel){
    // console.log('all vowels are contain in this wor');
}
else{
    // console.log('all vowels are not contain in this wor ');
}
// Task 4.... chenge the letter from the string.
let text = 'banana';
if(text.includes('a')){
    // console.log(text.replace(/a/g , 'x'))
}
// Task 5,, capitalize the fast letter of string.

let hobi = 'i want to be a web eveloper.';
const words = hobi.split(" ");


for (let c = 0; c < words.length; c++) {
    words[c] = words[c][0].toUpperCase() + words[c].substr(1);
}
const result = words.join(" ");
// console.log(result);

//  No task but join practise. ********* 
let arrayes = [ 10 , 20 , 30];
arrayes = arrayes.join(" ");
// console.log(arrayes);

