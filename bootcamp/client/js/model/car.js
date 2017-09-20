import colorNamer from 'color-namer';

export class Car {
    // constructor(id, make, model, year, color, price) {
    //      this.id = id;
    //      this.make = make;
    //      this.model = model;
    //      this.year = year;
    //      this.color = color;
    //      this.price = price;
    // }

    // constructor(carData) {
    //     this.id = carData.id;
    //     this.make = carData.make;
    //     this.model = carData.model;
    //     this.year = carData.year;
    //     this.color = carData.color;
    //     this.price = carData.price;
    //
    // }

    constructor(carData) {
        Object.assign(this, carData);

    }

    getFormattedPrice() {
        return '$' + this.price;
    }

    getColorName() {
        var colorName = colorNamer(this.colorHexCode).html[0].name;
        return colorName.charAt(0).toUpperCase() + colorName.slice(1);
    }
}


export class Cars {
    constructor(cars) {
        this.cars = cars.slice();
        this.setSortBy('id');
    }

    setSortBy(sortBy) {
        this.sortBy = sortBy;
        this.sort();
        return this;
    }

    append(car) {
        this.cars = this.cars.concat(car);
        this.sort();
        return this;
    }

    sort() {
        this.cars.sort((a, b) => {
            return a[this.sortBy] - b[this.sortBy];
        });
    }

    nextID() {
        return Math.max(...this.cars.map(c => c.id)) + 1;
    }

    getCars() {
        return this.cars;
    }
}
