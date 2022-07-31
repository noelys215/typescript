let age: number | string | boolean = 32;
age = 21;
age = '24';
age = 'true';

type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coords: Point | Loc = { x: 1, y: 34 };
coords = { lat: 36.93828, long: 49.49648 };

// Functions

function printAge(age: number | string): void {
	console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
	if (typeof price === 'string') {
		price = +price.replace('4', '');
	}
	return price * tax;
}

printAge('23');
printAge(23);

// Arrays
// const stuff: (number | string)[] = [2, 3, '2'];

// Literal Types

let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';
// mood = 'Depressed';
