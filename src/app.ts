abstract class Vehicle {

    constructor(
        private _make: string,
        private _model: string,
        private _year: number,
        private _fare: number,
        private _rented: boolean,
    ) { }


    public get make(): string {
        return this._make
    }

    public get modal(): string {
        return this._model
    }
    public get year(): number {
        return this._year
    }
    public get fare(): number {
        return this._fare
    }
    public get rented(): boolean {
        return this._rented
    }


    public setRented(rented: boolean): void {
        this._rented = rented;
    }

    public abstract rentalRate(): number;

    public rent(): void {
        if (this.rented) {
            console.log("Vehicle is already rented.");
        } else {
            this._rented = true;
            console.log("Vehicle rented.");
        }
    }

    public returnVehicle(): void {
        if (this.rented) {
            this._rented = false;
            console.log("Vehicle returned.");
        } else {
            console.log("Vehicle is not rented.");
        }
    }

}
class Car extends Vehicle {

    constructor(make: string, model: string, year: number, fare: number, rented: boolean, private numDoors: number, private numSeats: number) {
        super(make, model, year, fare, rented);
    }
    
    public get getNumOFDoors() : number {
        return this.numDoors
    }
    
    public get getNumSeats() : number {
        return this.numSeats
    }
    
    public rentalRate(): number {
        return this.fare * 2
    }
}

class Truck extends Vehicle {
    private cargoCapacity: number;

    constructor(make: string, model: string, year: number, fare: number, rented: boolean, cargoCapacity: number) {
        super(make, model, year, fare, rented);
        this.cargoCapacity = cargoCapacity;
    }
     
     public get getCargoCapacity() : number {
        return this.cargoCapacity
     }
     
    public rentalRate(): number {
        return this.fare * 3
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number;

    constructor(make: string, model: string, year: number, fare: number, rented: boolean, engineSize: number) {
        super(make, model, year, fare, rented);
        this.engineSize = engineSize;
    }
    
    public get getEngineSize() : number {
        return this.engineSize
    }
    
    public rentalRate(): number {
        return this.fare * 4
    }
}
const car1 = new Car("Toyota", "Camry", 2022, 2000,false, 4, 5);
car1.rent();
car1.returnVehicle(); // 

const truck1 = new Truck("Ford", "F-150", 2022,3000,false, 1500);
truck1.rent();
truck1.returnVehicle(); 

const motorcycle1 = new Motorcycle("Harley-Davidson", "Road King", 2022,5000,false, 1800);
motorcycle1.rent(); 
motorcycle1.returnVehicle(); 