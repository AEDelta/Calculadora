function calcular() {
    const fipeInput = document.getElementById('fipe');
    const servico = document.getElementById('servico').value;
    const fipeStr = fipeInput.value.trim();

    const fipe = Number(fipeStr);

    if (!fipeStr || isNaN(fipe) || fipe <= 0) {
        alert("Por favor, insira um valor FIPE válido, somente números maiores que zero.");
        fipeInput.focus();
        return;
    }

    let valorBase = 0;
    let porcentagem = 0;
    let total = 0;

    if (servico === "compraSegura") {
        valorBase = 350;
        porcentagem = 0.002;
    } else if (servico === "prevenScan") {
        valorBase = 500;
        porcentagem = 0.0025;
    }

    if (fipe < 200000) {
        total = valorBase;
    } else {
        total = fipe * porcentagem;
    }

    const fipeFormatado = fipe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valorBaseFormatado = valorBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('resultado').style.display = "block";
    document.getElementById('resultado').innerHTML = `
        <strong>Resultado:</strong><br>
        Valor FIPE: ${fipeFormatado}<br>
        ${fipe < 200000 ? `
            Valor Base: ${valorBaseFormatado}<br>
            <strong>Total a Pagar: ${totalFormatado}</strong>
        ` : `
            Porcentagem (${(porcentagem * 100).toFixed(2)}% sobre o valor total): ${totalFormatado}<br>
            <strong>Total a Pagar: ${totalFormatado}</strong>
        `}
    `;
}

function limpar() {
    document.getElementById('fipe').value = '';
    document.getElementById('servico').selectedIndex = 0;
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'none';
    resultado.innerHTML = '';
    document.getElementById('fipe').focus();
}
