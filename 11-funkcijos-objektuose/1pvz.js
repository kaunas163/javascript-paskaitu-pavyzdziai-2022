let preke = {
    pavadinimas: 'Piestukas',
    kaina: 0.99,
    kiekis: 478,
    isvesti_informacija: function() {
        console.log('-------------------');
        console.log('PREKES INFORMACIJA');
        console.log('Pavadinimas:', this.pavadinimas);
        console.log('Kaina:', this.kaina, '€');
        console.log('Kiekis sandelyje:', this.kiekis, 'vnt.');
        console.log('-------------------');
    }
};

console.log(preke);
console.log();

console.log(preke.pavadinimas);
console.log();

preke.isvesti_informacija();
