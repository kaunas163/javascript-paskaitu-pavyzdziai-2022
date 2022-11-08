let prekiu_kiekis = 24;

while (prekiu_kiekis > 0) {
    console.log('turimas prekiu kiekis:', prekiu_kiekis);
    let kiek_nupirko = Math.floor(Math.random() * 5) + 1;
    console.log('nupirko:', kiek_nupirko, '\n');
    prekiu_kiekis -= kiek_nupirko;
}
