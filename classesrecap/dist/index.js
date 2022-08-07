"use strict";
// class Player {
// 	public readonly first: string;
// 	public readonly last: string;
// 	private score: number = 0;
// 	constructor(first: string, last: string) {
// 		this.first = first;
// 		this.last = last;
// 	}
// 	private secretMethod() {
// 		console.log('Shh');
// 	}
// }
class Player {
    first;
    last;
    _score;
    // private score: number = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('Shh');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    getScore() {
        return this._score;
    }
}
class SuperPlayer extends Player {
    isAdmin = true;
    maxScore() {
        this._score = 9999;
    }
}
const polly = new Player('Polly', 'Poppins', 99);
console.log(polly.fullName);
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const jacket1 = new Jacket('Varvatos', 'black');
const bike1 = new Bike('yellow');
class Employee {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log('Hi');
    }
}
class FullTimeEmployee extends Employee {
    salary;
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(firstName, lastName, hourlyRate, hoursWorked) {
        super(firstName, lastName);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
