let students = [
  { name: "Emeka", math: 80, english: 70, science: 72 },
  { name: "Ada", math: 90, english: 85, science: 88 },
  { name: "John", math: 60, english: 65, science: 70 },
  { name: "Chioma", math: 75, english: 80, science: 78 },
  { name: "David", math: 50, english: 55, science: 60 },
  { name: "Grace", math: 95, english: 92, science: 94 }
];

let highestAverage = 0;
let topStudent = "";

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  let average = (student.math + student.english + student.science) / 3;

  console.log(`${student.name}'s average is ${average}`);

  if (average > highestAverage) {
    highestAverage = average;
    topStudent = student.name;
  }
}

console.log(`Top student is ${topStudent} with average ${highestAverage}`);