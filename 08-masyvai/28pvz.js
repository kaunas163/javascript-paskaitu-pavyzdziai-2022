let pradiniai_skaiciai = [7, 8, -5, -1, 3, -5, 4];

let teigiami_skaiciai = [];
let neigiami_skaiciai = [];

for (const skaicius of pradiniai_skaiciai) {
    if (skaicius > 0) {
        teigiami_skaiciai.push(skaicius);
    } else {
        neigiami_skaiciai.push(skaicius);
    }
}

console.log('pradiniai duomenys:', pradiniai_skaiciai);
console.log('atrinkti teigiami:', teigiami_skaiciai);
console.log('atrinkti neigiami:', neigiami_skaiciai);
