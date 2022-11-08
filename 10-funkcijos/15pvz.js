function didziausio_paieska(skaiciu_masyvas) {
    let max = skaiciu_masyvas[0];

    for (const skaicius of skaiciu_masyvas) {
        if (skaicius > max) {
            max = skaicius;
        }
    }

    console.log('didziausias rastas skaicius:', max);
}

let skaiciai1 = [7, 8, 99, 14, 557, 21, 23];
let skaiciai2 = [9, 7, 4, 2, 3, 6, 8, 10, 21, 5];

console.log('skaiciai1:', skaiciai1);
didziausio_paieska(skaiciai1);

console.log('skaiciai2:',skaiciai2);
didziausio_paieska(skaiciai2);
