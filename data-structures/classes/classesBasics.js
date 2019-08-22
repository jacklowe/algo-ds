class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.absences = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents() {
    return "Enrolling students...";
  }

  markLate() {
    this.absences++;
    if (this.absences >= 3) {
      return "You're cancelled.";
    }
    return `${this.firstName} has been late ${this.absences} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Jack", "Lowe");
let secondStudent = new Student("Miles", "Lowe");

console.log(secondStudent.addScore(49));
console.log(secondStudent.addScore(50));
console.log(secondStudent.calculateAverage());

// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());

// console.log(Student.EnrollStudents());
