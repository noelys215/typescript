"use strict";
const cat = {
    name: 'Polly',
    breed: 'Orange',
    age: 0.5,
};
let coordinate = { x: 34, y: 69 };
const printName = (person) => {
    console.log(`${person.first} ${person.last}`);
};
printName({ first: 'John' });
const randomCoord = () => ({
    x: Math.random(),
    y: Math.random(),
});
const calculatePayout = (song) => song.numberStreams * 0.0033;
const printSong = (song) => {
    console.log(`${song.title} - ${song.title}`);
};
const mySong = {
    title: 'Shadow Moses',
    artist: 'Bring Me the Horizon',
    numberStreams: 9999999,
    credits: {
        producer: 'Terry Date',
        writer: 'Oliver Sykes',
    },
};
calculatePayout(mySong);
printSong(mySong);
const happyFace = {
    radius: 4,
    color: 'yellow',
};
