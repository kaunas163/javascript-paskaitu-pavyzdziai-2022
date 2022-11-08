function skaiciuoti_suma(a, b) {
    let suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
}

skaiciuoti_suma(6, 5);
skaiciuoti_suma(4, 9);

let atsitikt1 = Math.floor(Math.random() * 10) + 1;
let atsitikt2 = Math.floor(Math.random() * 10) + 1;

skaiciuoti_suma(atsitikt1, atsitikt2);
