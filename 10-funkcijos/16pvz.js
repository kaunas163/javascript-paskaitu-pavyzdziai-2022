function atsitiktiniu_generavimas(kiek, min, max, masyvas) {
    for (let i = 0; i < kiek; i++) {
        masyvas.push(Math.floor(Math.random() * (max - min)) + min);
    }
}

function masyvo_isvedimas(komentaras, masyvas) {
    console.log(komentaras);
    console.log(masyvas);
    console.log();
}

function sumos_paieska(masyvas) {
    let suma = 0;
    for (const el of masyvas) {
        suma += el;
    }
    console.log('suma:', suma);
    console.log();
}

let skaiciai1 = [];
let skaiciai2 = [];

atsitiktiniu_generavimas(10, 5, 10, skaiciai1);
atsitiktiniu_generavimas(5, 1, 10, skaiciai2);

masyvo_isvedimas('pirmi skaiciai', skaiciai1);
sumos_paieska(skaiciai1);

masyvo_isvedimas('antri skaiciai', skaiciai2);
sumos_paieska(skaiciai2);
