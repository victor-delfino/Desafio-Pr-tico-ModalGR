function formatarNome() {
    const nomeCompleto = document.getElementById('nomeCompleto').value;

    if (nomeCompleto === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    // Desconsiderar e utilização do set para otimizar busca
    const conectores = new Set(['de', 'da', 'das', 'do', 'dos', 'e']);

    // Divide o nome completo em partes
    const partes = nomeCompleto.split(' ');

    // Deixar o último nome como maíuscula para seguir o padrão do crachá
    const sobrenome = partes[partes.length - 1].toUpperCase();

    // não adiciona no array os conectores, apenas as iniciais em maíusculas do nome
    const iniciais = partes.slice(0, -1)
        .filter(parte => !conectores.has(parte.toLowerCase()))
        .map(parte => parte[0].toUpperCase() + '.');

    const nomeFormatado = `${sobrenome}, ${iniciais.join(' ')}`;
    document.getElementById('nomeFormatado').innerText = nomeFormatado; 

    return nomeFormatado;
}

// Função para limpar as informações inseridas 
function limparCampo() {
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('nomeFormatado').innerText = '';
}