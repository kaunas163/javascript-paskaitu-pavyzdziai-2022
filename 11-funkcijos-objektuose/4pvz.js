let studentas = {
    vardas: 'Ugnius',
    pazymiai: [7, 8, 7, 9, 10, 8],
    suma: function() {
        return this.pazymiai.reduce((sum, paz) => sum + paz, 0);
    },
    vidurkis: function() {
        return this.suma() / this.pazymiai.length;
    }
};

console.log( 'pazymiu suma:', studentas.suma() );
console.log( 'pazymiu vidurkis:', studentas.vidurkis() );
