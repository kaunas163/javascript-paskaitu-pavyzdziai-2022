function skaiciu_suma(masyvas) {
    let suma = 0;
    for (const sk of masyvas) {
        suma += sk;
    }
    return suma;
}

let skaiciai = [7, 8, 5, 3, 5, 4, 1];

let suma = skaiciu_suma(skaiciai);
let vidurkis = suma / skaiciai.length;

console.log('skaiciai:', skaiciai);
console.log('suma:', suma);
console.log('vidurkis:', vidurkis);
