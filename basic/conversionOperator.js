let score = "33";
let num = "c";
// console.log(score);
// console.log(typeof score);
// console.log(typeof(score));
// let conNumber =Number(score);
// console.log(score);
// console.log(typeof conNumber);

// // null =0 
// // undefined = NaN
// // true = 1
// // false = 0 

// console.log(Number(num));

// ------------------- operation----------------------------------
let value = 3 ;

let negValue = -value;
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str = "hello"
let str2 = "ajay"

console.log(str+str2);

// operator

console.log(+true);
console.log(true);
let num1,num2,num3;
num1=num2=num3 = 2+2;
let gameCounter = 100 ;
++gameCounter;
console.log(gameCounter); 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack and heap memory
// stack(primitive) Heap (non primitive)
let myYoutube = "ajay"
let myYoutube2 = myYoutube
    myYoutube2 = "vijay"
    console.log(myYoutube);
console.log(myYoutube2);

let userOne={
    email : "ajay@gmail.com",
    age : 23
}

let userTwo = userOne
userTwo.email="vijay@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);