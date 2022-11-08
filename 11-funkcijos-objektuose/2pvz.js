let preke = {
    pavadinimas: 'Piestukas',
    kaina: 0.99,
    kiekis: 478,
    nupirko_viena: function() {
        this.kiekis--;
    },
    nupirko_kelis: function(kiek_nupirkta) {
        if (kiek_nupirkta > this.kiekis) {
            console.log('negalima nupirkti daugiau nei yra sandelyje');
            console.log('bus parduota', this.kiekis, 'vienetu, vietoj', kiek_nupirkta);
            this.kiekis = 0;
        } else {
            this.kiekis -= kiek_nupirkta;
        }
    }
};

console.log('pradinis kiekis:', preke.kiekis);
preke.nupirko_viena();
preke.nupirko_viena();
preke.nupirko_viena();
console.log('naujas kiekis:', preke.kiekis);
preke.nupirko_kelis(460);
console.log('naujas kiekis:', preke.kiekis);
preke.nupirko_kelis(18);
console.log('naujas kiekis:', preke.kiekis);
