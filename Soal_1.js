let studentsScore = [
  {
    name: 'Andi',
    score: 90
  },
  {
    name: 'Rudi',
    score: 80
  },
  {
    name: 'Dira',
    score: 100
  }
];

// Cari siswa dengan nilai tertinggi menggunakan reduce
let highestStudent = studentsScore.reduce((max, student) => {
  return student.score > max.score ? student : max;
});

console.log(`Siswa dengan nilai tertinggi adalah ${highestStudent.name} dengan nilai ${highestStudent.score}`);