let knygos = [
    { pavadinimas: 'apie saule', kaina: 14.00, autorius: 'Jonas Jonaitis' },
    { pavadinimas: 'miskininkas', kaina: 29.99, autorius: 'Petras Petrauskas' },
    { pavadinimas: 'mistika abc', kaina: 10.90, autorius: 'Gintare Gintaryte' },
    { pavadinimas: 'smegenu gidas', kaina: 25.49, autorius: 'Inga Ingute' },
    { pavadinimas: 'gyvuninkyste', kaina: 12.30, autorius: 'Gincius Ginciukas' },
];

let kainu_suma = 0;

console.log('Visos knygos:');

for (const knyga of knygos) {
    kainu_suma += knyga.kaina;
    console.log('-', knyga.pavadinimas, 'kainuoja', knyga.kaina, 'eur');
}

console.log();
console.log('Knygu kiekis:', knygos.length);
console.log('Bendra suma:', kainu_suma, 'eur');
console.log('Bendra suma:', Math.round(kainu_suma), 'eur');
