interface Points {
	x: number;
	y: number;
}

const pt: Points = { x: 13, y: 23 };

interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
	sayHi: () => string;
	sayBye?(): string;
}

const william: Person = {
	id: 42069,
	first: 'William',
	last: 'Gallagher',
	nickname: 'Liam',
	sayHi: () => 'hello',
};

interface Products {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const shoes: Products = {
	name: 'Doc Martens',
	price: 169.99,
	applyDiscount(discount: number) {
		return this.price * discount;
	},
};

interface Cat {
	name: string;
	age: number;
}

interface Cat {
	breed: string;
	meow(): string;
}

const polly: Cat = {
	name: 'Polly',
	age: 0.2,
	breed: 'Norwegian',
	meow() {
		return 'meow';
	},
};

interface ServiceCat extends Cat {
	job: 'sleep' | 'eat' | 'purr';
}

const chonk: ServiceCat = {
	name: 'Timmy',
	age: 1,
	breed: 'orange',
	job: 'sleep',
	meow() {
		return 'meow';
	},
};
