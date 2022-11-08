let preke = {
    pavadinimas: 'piestukas',
    kodas: 'ASFSDG458485',
    kaina: 2.99,
    kiekis_sandelyje: 451
};

console.log('preke:', preke, '\n');
console.log('pardavus preke galetume uzdirbti:',
    (preke.kaina * preke.kiekis_sandelyje));
