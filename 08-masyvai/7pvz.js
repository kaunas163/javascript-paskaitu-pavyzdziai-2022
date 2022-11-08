let failai = [
    'naujienos/pirma.txt',
    'naujienos/antra.txt',
    'naujienos/trecia.txt',
    'naujienos/ketvirta.txt',
    'naujienos/penkta.txt'
];

console.log('naujienu failai:', failai);
console.log('naujienu kiekis:', failai.length);
console.log();

let dar_viena = 'naujienos/sesta.txt';
failai.push(dar_viena);

console.log('papildomai prideta naujiena:', dar_viena);
console.log('naujienu failai:', failai);
console.log('naujienu kiekis:', failai.length);
