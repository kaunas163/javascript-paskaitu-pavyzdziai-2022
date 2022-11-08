let preke = {
    pavadinimas: 'piestukas',
    kodas: 'ASFSDG458485',
    kaina: 2.99,
    kiekis_sandelyje: 451,
    pardavus: function() {
        console.log('pardavus preke galetume uzdirbti:',
            (this.kaina * this.kiekis_sandelyje));
    }
};

console.log('preke:', preke, '\n');
preke.pardavus();
