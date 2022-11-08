function preke_factory(pavadinimas, kaina, kiekis) {
    return {
        pavadinimas,
        kaina,
        kiekis,
        isvesti_informacija: function() {
            console.log('-------------------');
            console.log('PREKES INFORMACIJA');
            console.log('Pavadinimas:', this.pavadinimas);
            console.log('Kaina:', this.kaina, '€');
            console.log('Kiekis sandelyje:', this.kiekis, 'vnt.');
            console.log('-------------------');
        }
    };
}

let preke1 = preke_factory('Piestukas', 1.99, 457);
let preke2 = preke_factory('Sasiuvinys', 2.99, 147);

console.log(preke1);

preke1.isvesti_informacija();
preke2.isvesti_informacija();
