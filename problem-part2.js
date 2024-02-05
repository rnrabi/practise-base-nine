// Task 1 :Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137, 10];

function loastNum(numbers) {
    let littleNum = numbers[0];
    for (const num of numbers) {
        if (num < littleNum) {
            littleNum = num;
        }
    }
    return littleNum;
}
const smolestNum = loastNum(heights2);
// console.log(smolestNum);

// Task 2 Find the friend with the smallest name.

const friends = ['rahim', 'robin', 'rn', 'rafi', 'ron', 'rashed'];

function shortName(names) {
    let resultShortName = names[0];
    for (const name of names) {
        if (name.length < resultShortName.length) {
            resultShortName = name;
        }
    }
    return resultShortName;
}
const shortFriend = shortName(friends);
// console.log(shortFriend);

// Task-3 Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(lap, tab, mob) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;
    const lapTotal = laptop * lap;
    const tabletTotal = tablet * tab;
    const mobileTotal = mobile * mob;
    const totalBugjet = lapTotal + tabletTotal + mobileTotal;
    return totalBugjet;
}

const totalBugjet = calculateElectronicsBudget(1, 1, 2);
// console.log(totalBugjet);

// Task-4 You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phoneObject) {
    let totalPrice = 0;
    const phoneCount = phoneObject.length;

    for (const phone of phones) {
        totalPrice = totalPrice + phone.price;
    }
    const avg = totalPrice / phoneCount;
    return parseFloat(avg.toFixed(2));
}

const phoneAverage = findAveragePhonePrice(phones);
// console.log(phoneAverage);


// Task-5 For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function employeeSalary(employees){
    let inTotalSalary = 0;
    for(const employee of employees){
        // console.log(employee);
        inTotalSalary = inTotalSalary + employee.increment * employee.experience + employee.starting;
    }
    return inTotalSalary;
}
const totalSalary = employeeSalary(employees);
// console.log(totalSalary);