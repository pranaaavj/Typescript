function Logger(target: Function) {
  console.log('Constructor ' + target.name + ' is invoked.');
}

function LogExecution(
  target: any,
  method: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value();
}

class Car {
  @LogExecution
  drive(str?: string) {
    console.log('Driving...');
  }
}

const car = new Car();

// car.drive();
