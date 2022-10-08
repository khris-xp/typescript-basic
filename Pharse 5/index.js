var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is ".concat(this.model, " and ").concat(this.doors, " doors and Electric is ").concat(this.isElectric));
    };
    return Car;
}());
var Ford = new Car('Ford Mustang', 4, true);
var Ferrari = new Car('Ferrari', 2, true);
var Lamboghini = new Car('Lambo', 2, true);
Ford.displayMake();
Ferrari.displayMake();
Lamboghini.displayMake();
