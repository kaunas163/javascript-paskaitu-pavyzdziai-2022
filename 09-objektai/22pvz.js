let knygos = [
    { pavadinimas: 'apie saule', kaina: 14.00, autorius: 'Jonas Jonaitis' },
    { pavadinimas: 'miskininkas', kaina: 29.99, autorius: 'Petras Petrauskas' },
    { pavadinimas: 'mistika abc', kaina: 10.90, autorius: 'Gintare Gintaryte' },
    { pavadinimas: 'smegenu gidas', kaina: 25.49, autorius: 'Inga Ingute' },
    { pavadinimas: 'gyvuninkyste', kaina: 12.30, autorius: 'Gincius Ginciukas' },
];

console.log('Knygos knygyne:');

for (const knyga of knygos) {
    console.log(`- ${knyga.pavadinimas} (${knyga.kaina} eur)`);
}
