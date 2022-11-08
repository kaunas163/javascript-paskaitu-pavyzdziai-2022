let failas = 'uzrasai/2022-10-14.txt';

if (failas == undefined) {
    console.log('prasome nurodyti faila');
} else if (failas.endsWith('.txt')) {
    console.log('failo nuskaitymas...');
} else {
    console.log('nurodytas failas netinkamo formato');
}
