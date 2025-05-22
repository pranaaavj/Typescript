class Student {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const student = new Student('Hari');
student.name = 'pranav';

console.log(student.name);
