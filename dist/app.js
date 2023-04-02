"use strict";
class Vehicle {
    constructor(_make, _model, _year, _fare, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._fare = _fare;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get modal() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get fare() {
        return this._fare;
    }
    get rented() {
        return this._rented;
    }
    setRented(rented) {
        this._rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log("Vehicle is already rented.");
        }
        else {
            this._rented = true;
            console.log("Vehicle rented.");
        }
    }
    returnVehicle() {
        if (this.rented) {
            this._rented = false;
            console.log("Vehicle returned.");
        }
        else {
            console.log("Vehicle is not rented.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, fare, rented, numDoors, numSeats) {
        super(make, model, year, fare, rented);
        this.numDoors = numDoors;
        this.numSeats = numSeats;
    }
    get getNumOFDoors() {
        return this.numDoors;
    }
    get getNumSeats() {
        return this.numSeats;
    }
    rentalRate() {
        return this.fare * 2;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, fare, rented, cargoCapacity) {
        super(make, model, year, fare, rented);
        this.cargoCapacity = cargoCapacity;
    }
    get getCargoCapacity() {
        return this.cargoCapacity;
    }
    rentalRate() {
        return this.fare * 3;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, fare, rented, engineSize) {
        super(make, model, year, fare, rented);
        this.engineSize = engineSize;
    }
    get getEngineSize() {
        return this.engineSize;
    }
    rentalRate() {
        return this.fare * 4;
    }
}
const car1 = new Car("Toyota", "Camry", 2022, 2000, false, 4, 5);
car1.rent();
car1.returnVehicle(); // 
const truck1 = new Truck("Ford", "F-150", 2022, 3000, false, 1500);
truck1.rent();
truck1.returnVehicle();
const motorcycle1 = new Motorcycle("Harley-Davidson", "Road King", 2022, 5000, false, 1800);
motorcycle1.rent();
motorcycle1.returnVehicle();
//# sourceMappingURL=app.js.map