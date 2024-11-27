// script.js

document.getElementById('criarMatriz').addEventListener('click', () => {
  const nomesSetores = document.getElementById('nomesSetores').value.split(',').map(s => s.trim());
  const setores = parseInt(document.getElementById('setores').value);

  if (nomesSetores.length !== setores) {
    alert('Certifique-se de inserir o mesmo número de nomes que setores!');
    return;
  }

  const matrizInput = document.getElementById('matrizInput');
  matrizInput.innerHTML = '';

  // Criar tabela para entrada de dados com cabeçalho
  let html = '<table><tr><th></th>';
  nomesSetores.forEach(nome => {
    html += `<th>${nome}</th>`;
  });
  html += '</tr>';

  for (let i = 0; i < setores; i++) {
    html += `<tr><th>${nomesSetores[i]}</th>`;
    for (let j = 0; j < setores; j++) {
      html += `<td><input type="number" step="0.01" class="coef" data-i="${i}" data-j="${j}" placeholder="a[${i + 1},${j + 1}]"></td>`;
    }
    html += '</tr>';
  }
  html += '</table>';
  html += '<p>Demanda final para cada setor (separados por vírgula):</p>';
  html += '<input type="text" id="demandaFinal" placeholder="Ex.: 200, 300, 150">';
  matrizInput.innerHTML = html;

  document.getElementById('calcular').style.display = 'block';
});

document.getElementById('calcular').addEventListener('click', () => {
  const nomesSetores = document.getElementById('nomesSetores').value.split(',').map(s => s.trim());
  const setores = parseInt(document.getElementById('setores').value);
  const coefInputs = document.querySelectorAll('.coef');
  const demandaFinalInput = document.getElementById('demandaFinal').value;

  // Validar e capturar a demanda final
  const Y = demandaFinalInput.split(',').map(v => parseFloat(v.trim()));
  if (Y.length !== setores || Y.some(isNaN)) {
    alert('O número de demandas deve corresponder ao número de setores e ser válido!');
    return;
  }

  // Criar matriz técnica (A)
  const A = [];
  for (let i = 0; i < setores; i++) A[i] = [];
  coefInputs.forEach(input => {
    const i = parseInt(input.dataset.i);
    const j = parseInt(input.dataset.j);
    A[i][j] = parseFloat(input.value) || 0;
  });

  // Calcular (I - A)
  const I = Array.from({ length: setores }, (_, i) =>
    Array.from({ length: setores }, (_, j) => (i === j ? 1 : 0))
  );

  const I_A = I.map((row, i) =>
    row.map((val, j) => val - A[i][j])
  );

  // Calcular (I - A)^-1 usando math.js
  try {
    const inv = math.inv(I_A); // Biblioteca math.js necessária

    // Calcular produção total (X)
    const X = math.multiply(inv, Y);

    // Mostrar resultados
    const resultadoDiv = document.getElementById('resultadoMatriz');
    resultadoDiv.innerHTML = '<h3>Matriz (I - A)<sup>-1</sup>:</h3>';
    resultadoDiv.innerHTML += '<table>' + inv.map(row =>
      '<tr>' + row.map(val =>
        `<td>${val.toFixed(2)}</td>`
      ).join('') + '</tr>'
    ).join('') + '</table>';

    const demandaDiv = document.getElementById('demandaTotal');
    demandaDiv.innerHTML = '<h3>Produção Total (X):</h3>';
    demandaDiv.innerHTML += '<ul>' + X.map((x, i) =>
      `<li>${nomesSetores[i]}: ${x.toFixed(2)}</li>`
    ).join('') + '</ul>';

    // Gerar observação
    const observacaoDiv = document.getElementById('observacao');
    const textoObservacao = `
      A produção total necessária em cada setor é maior que a demanda final, 
      pois inclui o consumo intermediário entre os setores. Este cálculo reflete 
      a interdependência econômica: ${nomesSetores.join(', ')} dependem uns dos outros. 
      Os resultados mostram a necessidade de:
      ${X.map((x, i) => `${x.toFixed(2)} unidades em ${nomesSetores[i]}`).join('; ')} 
      para atender às demandas finais de ${Y.join(', ')}.
    `;

    document.getElementById('textoObservacao').innerText = textoObservacao;
    observacaoDiv.style.display = 'block';

    document.getElementById('output').style.display = 'block';
  } catch (error) {
    alert('Erro ao calcular (I - A)^-1. Verifique os dados inseridos.');
  }
});
