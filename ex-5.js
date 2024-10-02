const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  },
];

// Start coding here
let update1 = [];
update1.push(employees[0],employees[1],employees[2],employees[3]);
delete update1[3];
console.log(update1);
console.log(employees);


const updateEmployees = employees;
delete updateEmployees[3];
console.log(updateEmployees);
console.log(employees);