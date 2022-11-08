let studentas = {
    vardas_pavarde: 'Tomas Tomauskas',
    pazymiai: [7, 7, 8, 7, 9, 8, 8],
    vidurkis: function() {
        let suma = 0;
        for (const paz of this.pazymiai) {
            suma += paz;
        }
        return suma / this.pazymiai.length;
    }
};

console.log('STUDENTAS', studentas, '\n');
console.log('JO PAZYMIAI', studentas.pazymiai, '\n');
console.log('PAZYMIU VIDURKIS', studentas.vidurkis());
