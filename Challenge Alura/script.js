function criptografarTexto() {
    var textareaOriginal = document.getElementById("leftTexto");
    var textareaCriptografado = document.getElementById("rightTextoCima");
    var textoOriginal = textareaOriginal.value.toLowerCase();
    var textoCriptografado = criptografarTextoFunc(textoOriginal);
    textareaCriptografado.value = textoCriptografado;

    rightBaixo.style.display = "none";
    rightImagem.style.display = "none";
    botaoCopiar.style.display = "block";
    right.classList.add("ajustar");
    rightTextoCima.classList.add("ajustar");
}

function descriptografarTexto() {
    var textareaCriptografado = document.getElementById("rightTextoCima");
    var textareaDescriptografado = document.getElementById("rightTextoCima");
    var textoCriptografado = textareaCriptografado.value;
    var textoDescriptografado = descriptografarTextoFunc(textoCriptografado);
    textareaDescriptografado.value = textoDescriptografado;
}

function criptografarTextoFunc(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function descriptografarTextoFunc(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

// botao copiar.
function copy() {
    let copiarTexto = document.getElementById("rightTextoCima");
    copiarTexto.select();
    document.execCommand("copy");
}