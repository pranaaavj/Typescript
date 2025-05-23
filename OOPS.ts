abstract class Person {
  constructor(protected name: string, protected id: number) {}
  abstract getDetails(): string;
}

interface Gradable {
  addGrade(grade: number): void;
  getAverageGrade(): number;
}

class Student extends Person implements Gradable {
  private grades: number[] = [];

  constructor(name: string, id: number, private major: string) {
    super(name, id);
  }

  getDetails(): string {
    return `ID: ${this.id} | Student: ${this.name} | Major: ${
      this.major
    } | Average ${this.getAverageGrade()}`;
  }

  addGrade(grade: number): void {
    this.grades.push(grade);
  }

  getAverageGrade(): number {
    return this.grades.length
      ? this.grades.reduce((acc, curr) => acc + curr, 0) / this.grades.length
      : 0;
  }
}

class Teacher extends Person {
  constructor(name: string, id: number, private subject: string) {
    super(name, id);
  }

  getDetails(): string {
    return `ID: ${this.id} | Teacher: ${this.name} | Subject ${this.subject}`;
  }
}

class StudentManagement {
  private people: Person[] = [];

  addPerson(person: Person): void {
    this.people.push(person);
  }

  getAllDetails(): string[] {
    return this.people.map((person) => person.getDetails());
  }

  assignGrade(person: Person, grade: number): void {
    if (person instanceof Student) {
      (person as Student).addGrade(grade);
    }
  }
}

const school = new StudentManagement();
const student = new Student('Pranav', 1, 'Computer Science');
const teacher = new Teacher('Sidharth', 1, 'Mechanical Engineering');

school.addPerson(student);
school.addPerson(teacher);
school.assignGrade(student, 80);
school.assignGrade(student, 90);

console.log(school.getAllDetails());

export { StudentManagement };
