class Student {
  constructor(fname, lname, year, major) {
    this.firstName = fname;
    this.lastName = lname;
    this.classYear = year;
    this.major = major;
  }
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getClassYear() {
    return this.classYear;
  }

  getMajor() {
    return this.major;
  }
}
const student = new Student("Darsh", "Sanghvi", 2022, "Information Technology");
console.log(student.getFirstName() + " " + student.getLastName());
