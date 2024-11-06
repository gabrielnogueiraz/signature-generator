const branches = {
    'Filial JF2': [
        'Av. Vereador Raymundo Hargreaves, 310',
        'Fontesville - Juiz de Fora - MG'
    ],
    'Filial JF1': [
        'Av. Itamar Franco, 3150',
        'Cascatinha - Juiz de Fora - MG',
    ],
    'Filial RJ': [
        'Rua Buenos Aires, 68 - 10º Andar',
        'Centro - Rio de Janeiro - RJ',
    ],
    'Filial BH': [
        'Av. do Contorno, 8000 - Sala 708',
        'Lourdes - Belo Horizonte - MG',
    ],
    'Filial DF': [
        'Setor D Sul, Lote 3, 1º Andar  - Pistão Sul',
        'Taguatinga - DF',
    ],
};

function generateSignature() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const branch = document.getElementById('branch').value;

    const branchAddress = branches[branch] ? branches[branch].join('<br>') : '';

    const signaturePreview = document.getElementById('signature-preview');
    signaturePreview.innerHTML = `
        <div class="informations">
            <div class="signature-bold">${name}</div>
            <div id="position" class="signature-bold">${position}</div>
        </div>
        <div class="informations2">
            <div class="signature-light">${branchAddress}</div>
            <div class="signature-light">www.cercred.com.br</div>
        </div>
    `;
}

function downloadSignature() {
    const name = document.getElementById('name').value;

    html2canvas(document.querySelector("#signature-preview")).then(canvas => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `assinatura_${name}.png`;
        link.click();
    });
}
