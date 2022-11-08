let studentai = [
    { vardas: 'Jonas', pazymiai: [8, 7, 8, 9, 6, 8] },
    { vardas: 'Tomas', pazymiai: [10, 10, 9, 10, 9, 10] },
    { vardas: 'Ugne', pazymiai: [9, 10, 9, 8] },
];

for (let i = 0; i < studentai.length; i++) {
    let suma = 0;
    for (const paz of studentai[i].pazymiai) {
        suma += paz;
    }
    studentai[i].vidurkis = Math.round(suma / studentai[i].pazymiai.length);
}

console.log(studentai);
console.log();

let didz_vidurk_stud = studentai[0];

for (const stud of studentai) {
    if (stud.vidurkis > didz_vidurk_stud.vidurkis) {
        didz_vidurk_stud = stud;
    }
}

console.log('Studentas(-e) su didziausiu vidurkiu:');
console.log(didz_vidurk_stud);
