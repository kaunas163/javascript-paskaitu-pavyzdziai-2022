let preke1 = {
    pavadinimas: 'piestukas',
    kaina: 0.99,
    kiekis: 142
};

let preke2 = {
    pavadinimas: 'sasiuvinys',
    kaina: 1.49,
    kiekis: 241
};

console.log('pirma preke:', preke1);
console.log('antra preke:', preke2);

if (preke1.kiekis > preke2.kiekis) {
    console.log('pirmos prekes daugiau vienetu');
} else if (preke2.kiekis > preke1.kiekis) {
    console.log('antros prekes daugiau vienetu');
} else {
    console.log('abieju prekiu vienodai');
}
