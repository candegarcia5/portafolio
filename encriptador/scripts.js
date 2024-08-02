function encryptText() {
    let input = document.getElementById('inputText').value;
    let output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    displayOutput(output);
}

function decryptText() {
    let input = document.getElementById('inputText').value;
    let output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    displayOutput(output);
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado: ' + outputText.value);
}

function displayOutput(output) {
    const outputText = document.getElementById('outputText');
    const outputImage = document.getElementById('outputImage');
    const outputMessage = document.getElementById('outputMessage');
    const outputSubMessage = document.getElementById('outputSubMessage');
    const copyButton = document.getElementById('copyButton');

    if (output) {
        outputText.value = output;
        outputText.style.display = 'block';
        outputImage.style.display = 'none';
        outputMessage.style.display = 'none';
        outputSubMessage.style.display = 'none';
        copyButton.style.display = 'block';
    } else {
        outputText.value = '';
        outputText.style.display = 'none';
        outputImage.style.display = 'block';
        outputMessage.style.display = 'block';
        outputSubMessage.style.display = 'block';
        copyButton.style.display = 'none';
    }
}

function clearOutput() {
    displayOutput('');
}
