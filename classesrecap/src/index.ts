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
	// private score: number = 0;
	constructor(public first: string, public last: string, protected _score: number) {}

	private secretMethod(): void {
		console.log('Shh');
	}
	get fullName(): string {
		return `${this.first} ${this.last}`;
	}

	getScore(): number {
		return this._score;
	}
}

class SuperPlayer extends Player {
	isAdmin: boolean = true;
	maxScore() {
		this._score = 9999;
	}
}

const polly = new Player('Polly', 'Poppins', 99);
console.log(polly.fullName);

interface Colorful {
	color: string;
}

interface Printable {
	print(): void;
}
class Bike implements Colorful {
	constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string) {}
	print(): void {
		console.log(`${this.color} ${this.brand} jacket`);
	}
}

const jacket1 = new Jacket('Varvatos', 'black');
const bike1 = new Bike('yellow');

abstract class Employee {
	constructor(public firstName: string, public lastName: string) {}
	abstract getPay(): number;
	greet() {
		console.log('Hi');
	}
}

class FullTimeEmployee extends Employee {
	constructor(firstName: string, lastName: string, private salary: number) {
		super(firstName, lastName);
	}
	getPay(): number {
		return this.salary;
	}
}
class PartTimeEmployee extends Employee {
	constructor(
		firstName: string,
		lastName: string,
		private hourlyRate: number,
		private hoursWorked: number
	) {
		super(firstName, lastName);
	}
	getPay(): number {
		return this.hourlyRate * this.hoursWorked;
	}
}
