const students = [
  { name: "Аня", grades: [5, 4, 4, 5] },
  { name: "Петя", grades: [3, 4, 4, 3] },
  { name: "Ира", grades: [5, 5, 5, 5] },
];


function newArray(arr) {
    return arr.map(student => {
        const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
        return { name: student.name, average: average };
    });
}


function findAverage(arr) {
    return arr.filter(student => student.average >= 4.5);
}

const averages = newArray(students);


console.log("All students: ", averages);
console.log("Students with average >= 4.5 :" , findAverage(averages));