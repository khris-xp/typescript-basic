class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;

    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    displayMake(): void {
        console.log(`This car is ${this.model} and ${this.doors} doors and Electric is ${this.isElectric}`);
    }
}

const Ford = new Car('Ford Mustang', 4, true);
const Ferrari = new Car('Ferrari', 2, true);
const Lamboghini = new Car('Lambo', 2, true);
Ford.displayMake();
Ferrari.displayMake();
Lamboghini.displayMake();