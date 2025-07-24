let name = "Olya";
let age = 19;
let bigNum = 20938847n;
let student = true;
let progress = null;
let status;
let education = {
    university: "ONPU",
    major: "126 IT",
}
const mySymbol = Symbol('description');


console.log(
  `name: ${typeof name}
  age: ${typeof age}
  bigNum: ${typeof bigNum}
  student: ${typeof student}
  progress: ${typeof progress}
  status: ${typeof status}
  education: ${typeof education}
  mySymbol: ${typeof mySymbol}`
);