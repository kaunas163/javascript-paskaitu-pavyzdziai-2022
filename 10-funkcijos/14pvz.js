function masyvo_isvedimas(masyvas) {
    console.log('DUOMENYS:', masyvas.join(', '));
}

function sumos_paieska(skaiciu_masyvas) {
    let suma = 0;
    for (const sk of skaiciu_masyvas) {
        suma += sk;
    }
    console.log('gauta suma:', suma);
    console.log();
}

let skaiciai1 = [6, 8, 6, 10, 8, 7];
let skaiciai2 = [23, 65, 74, 28];

masyvo_isvedimas(skaiciai1);
sumos_paieska(skaiciai1);

masyvo_isvedimas(skaiciai2);
sumos_paieska(skaiciai2);
