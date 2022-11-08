let skaiciai = [8, 7, 5, 6, 3, 2];

let lyginiu_suma = 0;
let lyginiu_kiekis = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 2 == 0) {
        lyginiu_suma += skaiciai[i];
        lyginiu_kiekis++;
    }
}

console.log('skaiciai:', skaiciai);
console.log('lyginiu suma:', lyginiu_suma);
console.log('lyginiu kiekis:', lyginiu_kiekis);
console.log('lyginiu vidurkis:', lyginiu_suma / lyginiu_kiekis);
