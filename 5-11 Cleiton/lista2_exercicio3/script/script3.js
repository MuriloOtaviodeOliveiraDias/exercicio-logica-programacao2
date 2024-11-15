function verificarSexo() {
const input = document.getElementByld("letra").value.trim();
const numeroVerificacao = parseFloat(input);
if (!isNaN(numeroVerificacao)) {
alert("Sexo Inválido")
;}
const letra = input.toUpperCase();
if (letra === "F") {
alert("F - Feminino");
} else if (letra === "M") {
alert("M - Masculino");
} else{
    alert("Sexo Inválido")
}
}
