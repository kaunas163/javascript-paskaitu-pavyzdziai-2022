let studentai = [
    { vardas: 'Jonas', pazymiai: [8, 7, 8, 9, 6, 8] },
    { vardas: 'Tomas', pazymiai: [10, 10, 9, 10, 9, 10] },
    { vardas: 'Ugne', pazymiai: [9, 10, 9, 8] },
];

for (const stud of studentai) {
    console.log('studentas(-e):', stud.vardas);
    let suma = 0;
    for (const paz of stud.pazymiai) {
        suma += paz;
    }
    let vidurkis = Math.round(suma / stud.pazymiai.length);
    console.log('jos/jo pazymiu vidurkis:', vidurkis);
    console.log();
}
