function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
    var mensagemElement = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagemElement.textContent = "Preenchiment válido! B é maior que A.";
        mensagemElement.style.color = "green";
    } else {
        mensagemElement.textContent = "Preenchimento inválido! B deve ser maior que A.";
        mensagemElement.style.color = "red";
    }
}