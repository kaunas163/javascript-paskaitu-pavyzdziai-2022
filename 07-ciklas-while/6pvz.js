let skaicius = 1;

while (skaicius % 7 != 0 || skaicius % 2 != 0) {
    skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius);
}
