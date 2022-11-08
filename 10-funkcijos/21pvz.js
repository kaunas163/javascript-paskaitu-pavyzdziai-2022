function suformatuotas_sakinys(vardas, amzius, profesija) {
    return `${vardas} (${amzius} m.) dirba ${profesija}.`;
}

console.log( suformatuotas_sakinys('Tomas', 24, 'policininku') );
console.log( suformatuotas_sakinys('Rasa', 42, 'buhaltere') );
