//JavaScript 陣列（Array）Methods

//.map() 轉換陣列
// 用途： 對每個元素執行函式，並產生新陣列（不影響原陣列）。
// 適用場景： 當你要 修改 陣列的元素，或將陣列轉換成新格式。
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared);

//.filter() 篩選陣列
// 用途： 只保留符合條件的元素，並產生新陣列。
// 適用場景： 需要篩選符合條件的資料。
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//.forEach() 單純遍歷, 不回傳值
// 用途： 針對每個元素執行函式，但不會回傳新陣列。
// 適用場景： 當你只想「執行某些操作」，但不需要新陣列，例如 console.log()、改變 DOM。
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));

//.find() 尋找符合條件的第一個元素
// 用途： 尋找第一個符合條件的元素（找到後就停止）。
// 適用場景： 你只需要「一個符合條件的值」，而不是整個陣列。
const users = [
    { id: 1, name: "Lorita" },
    { id: 2, name: "Yuna" },
    { id: 3, name: "Anise" },
    { id: 4, name: "Su"}
];

const user = users.find(user => user.id === 2);
console.log(user);

//.reduce() 累加,統計
// 用途： 對陣列中的所有元素執行累加運算，回傳單一值。
// 適用場景： 計算總和、平均數、合併物件等。
//總和
const numbers3 = [1, 2, 3, 4, 6];
const sum = numbers3.reduce((total, num) => total + num, 0);
console.log(sum);
//平均數
const scores = [90, 80, 70, 60];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);

//.some() 是否至少有一個符合條件
// 用途： 檢查陣列中是否「至少有一個」符合條件的元素，回傳 true 或 false
// 適用場景： 你想知道「有沒有符合條件的元素」。
const numbers4 = [1, 3, 5, 7];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);

//every() 是否全部符合條件
// 用途： 檢查陣列中「所有元素」是否都符合條件，回傳 true 或 false。
// 適用場景： 你想確認「所有元素」是否符合條件。
const numbers5 = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);

//find()

