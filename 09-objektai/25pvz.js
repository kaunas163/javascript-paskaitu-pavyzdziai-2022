let studentai = [
    { vardas: 'Jonas', pazymiai: [8, 7, 8, 9, 6, 8] },
    { vardas: 'Tomas', pazymiai: [10, 10, 9, 10, 9, 10] },
    { vardas: 'Ugne', pazymiai: [9, 10, 9, 8] },
];

let didz_vidurk_stud = studentai[0];
let didz_vidurkis = 0;

for (const stud of studentai) {
    // pazymiu sumos paieska
    let suma = 0;
    for (const paz of stud.pazymiai) {
        suma += paz;
    }

    // pazymiu vidurkio skaiciavimas
    let vidurkis = Math.round(suma / stud.pazymiai.length);

    // patikrinimas ar sitas vidurkis didesnis uz
    // iki dabar zinoma didziausia vidurki
    if (vidurkis > didz_vidurkis) {
        didz_vidurk_stud = stud;
        didz_vidurkis = vidurkis;
    }
}

console.log('Studentas(-e) su didziausiu vidurkiu:');
console.log(didz_vidurk_stud);
