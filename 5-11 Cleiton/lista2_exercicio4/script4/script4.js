function verificarLetra() {
    const input = document.getElementById("letra").ariaValueMax.trim().toLowerCase();
if (input.length !== 1 || !isNaN(parseFloat(input))) {
    alert("por favor, digit apenas uma letra válida.");
    return;
}

const vogais = ["a", "e", "i", "o", "u"]
if (vogais.includes(input)) {
    alert("A letra digitada é uma Vogal");
}else{
    alert("A letra digitada é uma Consoante.");
}
}