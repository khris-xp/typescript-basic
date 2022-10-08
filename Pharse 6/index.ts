interface ICar {
    model: String,
    make: String,
    display(): void
}

const myCar: ICar = {
    model: 'BMW',
    make: 'BMWI8',
    display() => {
    console.log(`This is ${myCar.make} Created By ${myCar.model}`);
    }
}