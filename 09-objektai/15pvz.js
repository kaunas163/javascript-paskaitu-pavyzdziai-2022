let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    amzius: 23,
    ugis: 1.7,
    pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
    grupe: 'IFM-3/4'
};

let paz_suma = 0;

for (const pazymys of studentas.pazymiai) {
    paz_suma += pazymys;
}

console.log('pazymiai', studentas.pazymiai);
console.log('pazymiu vidurkis',
    paz_suma / studentas.pazymiai.length);
