let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    amzius: 23,
    ugis: 1.7,
    pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
    grupe: 'IFM-3/4'
};

console.log('pazymiai:');

for (const pazymys of studentas.pazymiai) {
    console.log(pazymys);
}
