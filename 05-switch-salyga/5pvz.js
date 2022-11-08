let skaicius1 = 8;
let skaicius2 = 4;
let veiksmas = '*';

console.log(skaicius1, veiksmas, skaicius2, 'yra:');

switch (veiksmas)
{
    case '+': console.log(skaicius1 + skaicius2); break;
    case '-': console.log(skaicius1 - skaicius2); break;
    case '*': console.log(skaicius1 * skaicius2); break;
    case '/': console.log(skaicius1 / skaicius2); break;
    default: console.log("Ivyko klaida"); break;
}
