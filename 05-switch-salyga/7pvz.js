// ...
let failo_galune = '.json';

switch (failo_galune) {
    case '.txt':
        console.log('nuskaitomos visos tekstinio failo eilutes');
        console.log('ir tada atliekami kiti reikalingi veiksmai');
        break;
    case '.json':
        console.log('nuskaitomas visas json failas');
        console.log('isparsinami json duomenys i masyva/objekta');
        console.log('atliekami kiti reikalingi veiksmai');
        break;
    default: console.log('Ivyko klaida'); break;
}
