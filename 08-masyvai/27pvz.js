let skaiciai = [];

let generuojamu_kiekis = Math.floor(Math.random() * 10) + 3;

for (let i = 0; i < generuojamu_kiekis; i++) {
    skaiciai.push(Math.floor(Math.random() * 10) + 1);
}

console.log('sugeneruoti skaiciai', skaiciai);

let suma = 0;

for (const skaicius of skaiciai) {
    suma += skaicius;
}

console.log('siu skaiciu suma:', suma);
