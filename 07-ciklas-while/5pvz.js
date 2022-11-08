while (true) {
    let skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius);

    if (skaicius % 7 == 0 && skaicius % 2 == 0) {
        console.log('skaicius', skaicius, 'dalinasi is 7 ir is 2');
        break;
    }
}
