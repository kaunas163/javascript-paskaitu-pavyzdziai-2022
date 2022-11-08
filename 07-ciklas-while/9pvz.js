let suma = 0;
let skaicius = 0;

while (suma < 500) {
    skaicius = Math.floor(Math.random() * 100) + 1;
    suma += skaicius;
    console.log(skaicius);
}

console.log('\nSiu skaiciu suma:', suma);
