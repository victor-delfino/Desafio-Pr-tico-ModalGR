function separarDados() {
    const dadosInput = document.getElementById('dados').value;

    const elementos = dadosInput.split(',').map(elemento => elemento.trim());

    if (dadosInput === '') {
        alert('Por favor, insira um dado válido.');
        return;
    }

    const numeros = [];
    const strings = [];

    // Loop através de cada elemento para determinar se é um número ou uma string
    elementos.forEach(elemento => {
        // Tenta converter para número
        const numero = parseFloat(elemento);

        // Caso seja convertido, vá para números, caso contrário para string
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            strings.push(elemento);
        }
    });

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Cria elementos para exibir os números e as strings separados
    const numerosDiv = document.createElement('div');
    numerosDiv.textContent = "Números: " + numeros.join(', ');
    resultadosDiv.appendChild(numerosDiv);

    const stringsDiv = document.createElement('div');
    stringsDiv.textContent = "Strings: " + strings.join(', ');
    resultadosDiv.appendChild(stringsDiv);
}

// Função para limpar os resultados
function limparCampo() {
    document.getElementById('resultados').innerHTML = ''; 
}
