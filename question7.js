let school = {
  name: "Greenfield Academy",
  classes: [
    { className: "JSS 1", students: 45 },
    { className: "JSS 2", students: 38 },
    { className: "JSS 3", students: 50 },
    { className: "SS 1", students: 42 },
    { className: "SS 2", students: 36 },
    { className: "SS 3", students: 29 }
  ]
};
console.log(school.name);

let totalStudents = 0;

for (let i = 0; i < school.classes.length; i++) {
  let cls = school.classes[i];

  console.log(`${cls.className} has ${cls.students} students`);

  totalStudents += cls.students;
}


console.log(`Total number of students is ${totalStudents}`);