//====array陣列基本操作
//ex-1處理學生分數
const scores = [85, 65, 78, 90, 92];

//新增 80分到陣列
scores.push(80);
console.log(scores);

//找出最高分
const maxScores = Math.max(...scores);
console.log(maxScores);

//找出所有90分以上的學生
const highScores = scores.filter(score => score >= 90);
console.log(highScores);

//計算平均分數
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(averageScore);


//====array陣列的映射與轉換
//ex-2 格式化產品名稱
const products = ["iPhone", "MacBook", "AirPods"];

//所有產品名稱換成大寫
const upperCaseProducts = products.map(product => product.toUpperCase());
console.log(upperCaseProducts);

//每個產品名稱前加上 "Apple -"
//map() 可以轉換陣列中的每個元素
const formattedProducts = products.map(product => `Apple - ${product}`);
console.log(formattedProducts);

const newProducts = products.map(product => `[Hot] - ${product}`);
console.log(newProducts);

//====物件Object基本操作
//ex-1管理員工資料
const employee = {
    name: "Lorita",
    age: 30,
    position: "Frontend Developer",

};

//修改年齡
employee.age = 31;
//新增一個屬性
employee.salary = 100000;
employee.email = "lorita@ailabpte.co";
employee.country = "Taiwan";
//檢查是否有 department 屬性
const hasDepartment = "department" in employee;
console.log(hasDepartment);
console.log(employee);
//刪除屬性
delete employee.email;
console.log(employee);
//遍歷物件屬性-Iterate 逐一取出物件中的每個屬性(key-value pairs)
const book = {
    title: "JavaScript Guide",
    author: "Lorita Lin",
    year: 2025,
    lang: "Chinese",
};
//使用for...in 迴圈遍歷物件
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
};


//====陣列的物件操作
//ex-1篩選出有效的訂單
const orders = [
    {
        id: 1,
        amount: 100,
        status: "completed",
    },
    {
        id: 2,
        amount: 200,
        status: "pending",
    },
    {
        id: 3,
        amount: 300,
        status: "completed",
    },
    
];

//1. 找出status有completed的訂單
const completedOrders = orders.filter(order => order.status === "completed");
console.log(completedOrders);

//2. 計算這些訂單總金額
const totalAmount = completedOrders.reduce((sum, order) => sum + order.amount, 0);
console.log(totalAmount);

//====陣列與物件的結合
//ex01-合併學生與成績
const students = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Lorita",
    },

];

const grades = [
    {
        studentId: 1,
        grade: 90
    },
    {
        studentId: 2,
        grade: 85        
    },

];

//使用map + find 合併資料
const studentsWithGrades = students.map(student => {
    const studentGrade = grades.find(grade => grade.studentId === student.id);
    return { ...student, grade: studentGrade ? studentGrade.grade: null};
});

console.log(studentsWithGrades);