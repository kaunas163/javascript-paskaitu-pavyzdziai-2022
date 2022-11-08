let skaiciai = [8, 7, 5, 6, 3, 2];

let lyginiu_suma = 0;
let nelyginiu_suma = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 2 == 0) {
        lyginiu_suma += skaiciai[i];
    } else {
        nelyginiu_suma += skaiciai[i];
    }
}

console.log('skaiciai:', skaiciai);
console.log('lyginiu suma:', lyginiu_suma);
console.log('nelyginiu suma:', nelyginiu_suma);
