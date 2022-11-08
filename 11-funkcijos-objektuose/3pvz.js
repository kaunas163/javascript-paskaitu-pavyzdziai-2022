let studentas = {
    vardas: 'Ugnius',
    pazymiai: [7, 8, 7, 9, 10, 8],
    vidurkis: function() {
        let suma = this.pazymiai.reduce((sum, paz) => sum + paz, 0);
        return suma / this.pazymiai.length;
    }
};

console.log( 'studento vidurkis:', studentas.vidurkis() );
