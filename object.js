const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
const golRo = colors['golden rod'];
// console.log(golRo);
// Task 2***********

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;
// console.log(car); 
// task 3 **********

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student.physics.marks)
// Task 4************

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
// console.log(Object.keys(student1).length);
// console.log(Object.values(student1));
// alternative rull 
let count = 0;
for (let c in student1) {
    count = count + 1;
}
// console.log(count)
// Task 5 (kothin)************* 

const myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
  
  for (let key in myObject) {
    let typeValue =typeof myObject[key];
    // console.log(`key: ${key} | type: ${typeValue}`)
    // another rull***********
    // let valueType = typeof myObject[key];
    // console.log(`key: ${key} | type: ${valueType}`);
  }
  