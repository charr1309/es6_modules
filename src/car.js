export class Car {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
}
info() {
    console.log(make, model, year);
}

//only one thing in this file so we do
//a default export for car

export default Car;