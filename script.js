// Elementos principais
const valorInput = document.getElementById('valor');
const informarDadosButton = document.getElementById('informar-dados');
const pixRadio = document.getElementById('pix');
const cartaoRadio = document.getElementById('cartao');
const painelPix = document.getElementById('painel-pix');
const painelCartao = document.getElementById('painel-cartao');
const erroValor = document.getElementById('erro-valor');
const totalPix = document.getElementById('total-pix');
const numeroCartao = document.getElementById('numero-cartao');
const iconeCartao = document.getElementById('icone-cartao');
const erroCartao = document.getElementById('erro-cartao');
const parcelas = document.getElementById('parcelas');
const totalCartao = document.getElementById('total-cartao');
const cpfInput = document.getElementById('cpf');
const pagarPixButton = document.getElementById('pagar-pix');
const erroCpf = document.getElementById('erro-cpf');

// Mostrar painel de pagamento
informarDadosButton.addEventListener('click', () => {
  const valor = parseFloat(valorInput.value);

  if (isNaN(valor) || valor <= 0) {
    erroValor.classList.remove('hidden');
    return;
  }

  erroValor.classList.add('hidden');

  if (pixRadio.checked) {
    painelPix.style.display = 'block';
    painelCartao.style.display = 'none';
    totalPix.textContent = (valor * 0.9).toFixed(2).replace('.', ',');
  } else if (cartaoRadio.checked) {
    painelCartao.style.display = 'block';
    painelPix.style.display = 'none';
    atualizarParcelas(valor);
  }
});

// Verificar número do cartão
numeroCartao.addEventListener('input', () => {
  const numero = numeroCartao.value;

  if (numero.startsWith('1234')) {
    iconeCartao.style.backgroundImage = 'url("./img/visa.png")';
    iconeCartao.style.visibility = 'visible';
    erroCartao.classList.add('hidden');
  } else if (numero.startsWith('4321')) {
    iconeCartao.style.backgroundImage = 'url("./img/mastercard.png")';
    iconeCartao.style.visibility = 'visible';
    erroCartao.classList.add('hidden');
  } else if (numero.length >= 4) {
    iconeCartao.style.visibility = 'hidden';
    erroCartao.classList.remove('hidden');
  } else {
    iconeCartao.style.visibility = 'hidden';
    erroCartao.classList.add('hidden');
  }
});


// Atualizar valor com parcelas
parcelas.addEventListener('change', () => {
  const valor = parseFloat(valorInput.value);
  atualizarParcelas(valor);
});

function atualizarParcelas(valor) {
  const parcelasSelecionadas = parseInt(parcelas.value);
  let total = valor;

  if (parcelasSelecionadas === 4) {
    total *= 1.05;
  } else if (parcelasSelecionadas === 5) {
    total *= 1.1;
  }

  totalCartao.textContent = total.toFixed(2).replace('.', ',');
}

// Pagar com cartão
document.getElementById('pagar-cartao').addEventListener('click', () => {
  const titular = document.getElementById('titular').value.trim();
  const numeroCartaoValue = numeroCartao.value.trim();
  const codigo = document.getElementById('codigo').value.trim();
  const vencimento = document.getElementById('vencimento').value.trim();

  if (!titular || !numeroCartaoValue || !codigo || !vencimento) {
    alert('Preencha todos os campos antes de pagar!');
    return;
  }

  if (erroCartao.classList.contains('hidden')) {
    alert('Enviado com sucesso!');
  } else {
    alert('Número de cartão inválido!');
  }
});

// Função para validar CPF no formato XXX.XXX.XXX-XX
function validarCpf(cpf) {
  const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regexCpf.test(cpf);
}

// Evento de validação do CPF
cpfInput.addEventListener('input', () => {
  const cpf = cpfInput.value.trim();

  if (validarCpf(cpf)) {
    erroCpf.classList.add('hidden');
  } else {
    erroCpf.classList.remove('hidden');
  }
});

// Botão "Pagar Pix"
pagarPixButton.addEventListener('click', () => {
  const cpf = cpfInput.value.trim();

  if (!validarCpf(cpf)) {
    alert('CPF inválido! Preencha corretamente.');
    return;
  }

  alert('Pagamento via PIX realizado com sucesso!');
});
