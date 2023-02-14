interface Tractor {
  engine(visitor: Visitor): void;
}

class Engine implements Tractor {
  engine(visitor: Visitor): void {
      visitor.getReultEngine(this);
  }
}
class Shift implements Tractor {
  engine(visitor: Visitor): void {
      visitor.getReultShift(this);
  }
}
interface Visitor {
  getReultEngine(element: Engine): void;
  getReultShift(element: Shift): void;
}

class GetStatus implements Visitor {
  getReultEngine(element: Engine): void {
      console.log(`Двигатель в норме`)
  }
  getReultShift(element: Shift): void {
      console.log(`Задний мост в норме`)
  }
} 

class Automatic implements Visitor {
  getReultEngine(element: Engine): void {
      console.log(`Двигатель в плавающих оборотах`)
  }
  getReultShift(element: Shift): void {
      console.log(`Задний мост в автоматическом режиме блокировки`)
  }
}

function resultTractor(tractor: Tractor[], visitor: Visitor) {
  for (const component of components) {
      component.engine(visitor);
  }
}
const components = [new Engine(),new Shift(),];

const getStatus = new GetStatus();
resultTractor(components, getStatus);

const auto = new Automatic();
resultTractor(components, auto);