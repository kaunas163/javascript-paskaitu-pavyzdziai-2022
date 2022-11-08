let skaiciai = [78, 47, 24, 36];

for (let i = 0; i < skaiciai.length; i++) {
    let isvedimas = 'skaicius ' + skaiciai[i] + ' yra ';
    if (skaiciai[i] % 2 == 0) {
        isvedimas += 'lyginis';
    } else {
        isvedimas += 'nelyginis';
    }
    console.log(isvedimas);
}
