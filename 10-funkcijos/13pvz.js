function isvesti_masyva(komentaras, masyvas) {
    console.log(komentaras);
    for (const elementas of masyvas) {
        console.log('-', elementas);
    }
    console.log();
}

let skaiciai = [8, 7, 9];
let zmones = ['Asta', 'Inga', 'Giedrius', 'Justas'];

isvesti_masyva('Skaiciai', skaiciai);
isvesti_masyva('Zmones', zmones);
