"use strict";
const pt = { x: 13, y: 23 };
const william = {
    id: 42069,
    first: 'William',
    last: 'Gallagher',
    nickname: 'Liam',
    sayHi: () => 'hello',
};
const shoes = {
    name: 'Doc Martens',
    price: 169.99,
    applyDiscount(discount) {
        return this.price * discount;
    },
};
const polly = {
    name: 'Polly',
    age: 0.2,
    breed: 'Norwegian',
    meow() {
        return 'meow';
    },
};
const chonk = {
    name: 'Timmy',
    age: 1,
    breed: 'orange',
    job: 'sleep',
    meow() {
        return 'meow';
    },
};
