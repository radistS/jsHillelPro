class Student {
  constructor(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / this.grades.length;
    return parseFloat(average.toFixed(1));
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.error("У масиві відвідуваності вже немає місця.");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.error("У масиві відвідуваності вже немає місця.");
    }
  }

  getAttendanceRate() {
    const totalClasses = this.attendance.filter((val) => val !== null).length;
    const attendedClasses = this.attendance.filter((val) => val === true).length;
    const rate = totalClasses === 0 ? 0 : (attendedClasses / totalClasses) * 100;
    return parseFloat(rate.toFixed(1));
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Петров", 2000, [95, 92, 88]);
const student2 = new Student("Петр", "Сидоров", 2002, [85, 87, 90]);
const student3 = new Student("Сидр", "Іванов", 2001, [50, 60, 65]);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();

student3.absent();
student3.absent();
student3.absent();

console.log(`${student1.firstName} ${student1.lastName}, вік: ${student1.getAge()}, середній бал: ${student1.getAverageGrade()}, відвідування: ${student1.getAttendanceRate()}, оцінка: ${student1.summary()}`);
console.log(`${student2.firstName} ${student2.lastName}, вік: ${student2.getAge()}, середній бал: ${student2.getAverageGrade()}, відвідування: ${student2.getAttendanceRate()}, оцінка: ${student2.summary()}`);
console.log(`${student3.firstName} ${student3.lastName}, вік: ${student3.getAge()}, середній бал: ${student3.getAverageGrade()}, відвідування: ${student3.getAttendanceRate()}, оцінка: ${student3.summary()}`);
