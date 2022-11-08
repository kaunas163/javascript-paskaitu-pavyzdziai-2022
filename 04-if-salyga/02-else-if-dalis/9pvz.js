let vardas = 'Petras';

if (vardas.includes('ABC')) {
    console.log('varde', vardas, 'yra ABC');
} else if (vardas.startsWith('Pe')) {
    console.log('vardas', vardas, 'prasideda su Pe');
} else if (vardas.endsWith('as')) {
    console.log('vardas', vardas, 'baigiasi su as');
}
