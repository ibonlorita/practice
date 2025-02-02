//宣告函式Function Declaration
//計算兩數相加
function addNumbers(a, b){
    return a + b;
}

console.log(addNumbers(5, 10));
console.log(addNumbers(3, 7));

//檢查奇偶數
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(10));
console.log(isEven(7));

//函式表達式 Function Expression
//計算平方
const square = function(num) {
    return num * num;
};

console.log(square(5));
console.log(square(10));
console.log(square(2));

//字串反轉
const reverseString = function(str) {
    return str.split('').reverse().join('');
};

console.log(reverseString("hello"));
console.log(reverseString("world"));

//箭頭函式 Arrow Function
//計算陣列總和
const sumArray = (arr) => arr.reduce((acc, curr)=> acc + curr, 0);

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30]));

//攝氏轉華氏
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));

//加強箭頭函式用法
// 傳統宣告函式
function add_1(a, b) {
    return a + b;
};
console.log(add_1(3, 5));

//函式表達式
const add_2 = function(a,b) {
    return a + b;
};
console.log(add_2(3, 5));

//箭頭函式
const add_3 = (a, b) => {
    return a + b;
};
console.log(add_3(3, 5));

//**01-如果只有一行return,可省略{}
const add_4 = (a, b) => a + b;
console.log(add_4(3, 5));

//**02-如果只有一個參數,可省略()
const square_1 = num_1 => num_1 * num_1;
console.log(square_1(4));

//**03-沒有參數時候,必須寫()
const sayHello_1 = () => "Hello, Worls!";
console.log(sayHello_1());

//關於this
//傳統函式的thi會隨著呼叫方式變動
function Person(name){
    this.name = name;
    this.sayHello = function() {
        console.log(`Hello, my name us ${this.name}`);
    };
};

const user_1 = new Person("Riter");
user_1.sayHello();

//換成箭頭函式
function Person_2(name){
    this.name = name;
    this.sayHello_2 = () => {
        console.log(`Hello, my name is ${this.name}`);
    };
};

const user_2 = new Person_2("Riter");
user_2.sayHello_2();

//map(), filter(), reduce()