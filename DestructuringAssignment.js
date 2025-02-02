const user = {
    name: "Lorita",
    age: 25,
    email: "lorita@ailabpte.co"

};

function getUserInfo({ name, age, email }) {
    return `${name} is ${age} years old. Contact: ${email} `
};

console.log(user);