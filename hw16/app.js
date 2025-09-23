class Student {
    constructor (name, surname, year, grades) {
        this.name = name;
        this.surname = surname;
        this.year = year;

        this.grades = grades || [];

        this.attendance = new Array(25).fill(null);;
    }

    getAge() {
        const today = new Date();
        const yearCurrent = today.getFullYear();
        return yearCurrent - this.year;
    }

    getAverageGrade() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        const average = sum / this.grades.length;
        return average;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index === -1) { 
            console.log('There is no empty place left!');
            return;
        }
        this.attendance[index] = true;
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index === -1) { 
            console.log('There is no empty place left!');
            return;
        }
        this.attendance[index] = false;
    }

    summary() {
        let presentCount = this.attendance.reduce((sum, n)=> {
            if (n === true) sum++;
            return sum;
        }, 0);

        const classesCount = this.attendance.filter(n => n !== null).length;
        const attendCount = presentCount / classesCount;
        const average = this.getAverageGrade();

        if (attendCount > 0.9 && average > 90) return 'Well done!';
        if (attendCount < 0.9 && average < 90) return 'Radish!';
        return 'Good, but could be better.';
    }
}   


const student1 = new Student('Olya', 'Lashuk', 2005, [90, 90, 90, 100]);
const student2 = new Student('Steve', 'Jobs', 2004, [100, 100, 100, 100]);
const student3 = new Student('Berta', 'Kirk', 2005, [70, 60, 90, 60]);

student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.absent();
student3.absent();


console.log(`
Student ${student1.name} ${student1.surname}: ${student1.summary()}
Student ${student2.name} ${student2.surname}: ${student2.summary()}
Student ${student3.name} ${student3.surname}: ${student3.summary()}
`);
