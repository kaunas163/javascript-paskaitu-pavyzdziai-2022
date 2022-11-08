let skaicius = 55;

if ((skaicius > 0 && skaicius < 100) || skaicius % 2 == 0) {
    console.log("skaicius patenka i rezius arba dalinasi is 2");
}

if (skaicius > 0 && (skaicius < 100 || skaicius % 2 == 0)) {
    console.log("skaicius teigiamas ir mazesnis uz 100 arba lyginis");
}
