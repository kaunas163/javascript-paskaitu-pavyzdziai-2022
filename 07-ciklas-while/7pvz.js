let bloko_aukstis = 100;
let turinio_aukstis = 128;

console.log('pradiniai duomenys');
console.log('bloko aukstis', bloko_aukstis);
console.log('turinio aukstis', turinio_aukstis);
console.log();

while (turinio_aukstis > bloko_aukstis) {
    bloko_aukstis += 10;
}

console.log('atnaujinti duomenys');
console.log('bloko aukstis', bloko_aukstis);
console.log('turinio aukstis', turinio_aukstis);
