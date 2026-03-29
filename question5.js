let employees = [
  { name: "Tunde", role: "Manager", salary: 350000 },
  { name: "Sola", role: "Developer", salary: 280000 },
  { name: "Kemi", role: "Designer", salary: 220000 },
  { name: "Femi", role: "Manager", salary: 370000 },
  { name: "Lola", role: "Developer", salary: 260000 }
];

for(i = 0;i < employees.length; i++){
    if(employees[i].role === "Developer"){
        console.log(employees[i].name)
    }
   
};
let totatSalary = 0;
for(i = 0; i < employees.length; i++){
    totatSalary += employees[i].salary    
}
console.log(totatSalary)

let lowest = employees[0];

for (let i = 1; i < employees.length; i++) {
  if (employees[i].salary < lowest.salary) {
    lowest = employees[i];
  }
}
console.log(`Lowest Salary: ${lowest.salary}`)