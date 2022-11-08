function suma(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

function skirtumas(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

let sk1 = Math.floor(Math.random() * 10) + 1;
let sk2 = Math.floor(Math.random() * 10) + 1;

suma(sk1, sk2);
skirtumas(sk1, sk2);
