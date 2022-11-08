let skaicius1 = 8;
let skaicius2 = 4;
let veiksmas = '*';

let atsakymas_tekstu = `${skaicius1} ${veiksmas} ${skaicius2} =`;
let atsakymas = 0;

switch (veiksmas)
{
    case '+': atsakymas = skaicius1 + skaicius2; break;
    case '-': atsakymas = skaicius1 - skaicius2; break;
    case '*': atsakymas = skaicius1 * skaicius2; break;
    case '/': atsakymas = skaicius1 / skaicius2; break;
    default: console.log("Ivyko klaida"); break;
}

console.log(atsakymas_tekstu, atsakymas);
