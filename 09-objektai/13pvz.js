let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    amzius: 23,
    ugis: 1.7,
    pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
    grupe: 'IFM-3/4'
};

for (const raktas in studentas) {
    if (raktas == 'vardas' || raktas == 'pazymiai') {
        console.log(raktas, studentas[raktas]);
    }
}

console.log('--------------');

for (const raktas in studentas) {
    if (typeof studentas[raktas] == 'number') {
        console.log(raktas, studentas[raktas]);
    }
}
