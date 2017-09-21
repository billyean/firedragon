import colorNamer from 'color-namer';

Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

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
        return '$' + this.price.format(2, 3);
    }

    getColorName() {
        var colorName = colorNamer(this.colorHexCode).html[0].name;
        return colorName.charAt(0).toUpperCase() + colorName.slice(1);
    }

    setID(id) {
        this.id = id;
    }
}


export class Cars {
    constructor(cars) {
        this._cars = cars.slice();
        this.setSortBy('id');
    }

    setSortBy(sortBy) {
        this.sortBy = sortBy;
        this.sort();
    }

    append(car) {
        this._cars = this._cars.concat(car);
        this.sort();
    }

    sort() {
        this._cars.sort((a, b) => {
            return a[this.sortBy] - b[this.sortBy];
        });
    }

    nextID() {
        return Math.max(...this.cars.map(c => c.id)) + 1;
    }

    get cars() {
        return this._cars;
    }
}
