let employee = {
  firstname: "Peter",
  lastname: "Parker",
  age: 22,
  role: "freelancer",
  department: "media"
};
console.log("Details of employee :");
for (let key in employee) {
  console.log(key, "-", employee[key]);
}
console.log("Age property deleted", delete employee.age);
console.log("Checking if age is still a property", employee.age);
