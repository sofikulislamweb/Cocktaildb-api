// const myObject = {
//     name: 'abul',
//     roll: 1,
//     class: 8,
//     subject: 'math',
//     friends: {
//         nam: 'abul',
//         roll: 'tabul',
//         id: 12

//     },
//     array: ['mazba', 'sorif', 'sofik']
// }
// const temp = `
// ${myObject.name};
// ${myObject.roll};
// ${myObject.friends.id};
// ${myObject.array[1]};

// `
// console.log(temp);
// task 3.1



// task 3.2

// const sevendivide = num => num / 7;
// const myNumber = sevendivide(700);
// console.log(myNumber)

// task 3

/* const double = (num1, num2) => {
    const add = num1 + num2;
    const divide = add / 2;
    return divide;

}
const myNumber = double(56, 74);
console.log(myNumber); */

//৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
// // task 3.4
// const numbers = (num1, num2) => {
//     const first = num1 + 7;
//     const second = num2 + 7;
//     const sum = first + second
//     return sum
// }
// console.log(numbers(10, 20))




//৪.অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const many = [1, 2, 3, 4, 56];
const number = many.map(num => num / 7);
// console.log(number)
//৬.সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const myObject = { name: 'mizbah', roll: 11, balance: 1290, location: 'coxsbazar' };
const balance = myObject.balance;
console.log(balance)


//৭.একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে(হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।



