let zmogus = {
    vardas_pavarde: 'Jonas Jonaitis',
    amzius: 45,
    profesija: 'furistas',
    ugis: 1.8,
    ar_turi_teises: true,
};

for (const raktas in zmogus) {
    console.log(raktas, ':', zmogus[raktas]);
}

console.log();

let raktas = 'amzius';
console.log(raktas, zmogus[raktas]);
