let skaiciai = [7, 4, 5, 2, 9];

let suma = 0;

for (const sk of skaiciai) {
    suma += sk;
}

console.log('skaiciai:', skaiciai);
console.log('suma:', suma);
console.log('kiekis:', skaiciai.length);
console.log('vidurkis:', suma / skaiciai.length);
