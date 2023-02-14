const msgMagreza = '<p>De acordo com a OMS, seu IMC está abaixo do recomendado para a sua altura!</p>';
const msgNormal = '<p>De acordo com a OMS, seu IMC é considerado normal para a sua altura!</p>';
const msgSobrepeso = '<p>De acordo com a OMS, seu IMC está acima do recomendado para a sua altura!</p>';
const msgObesidade = '<p>De acordo com a OMS, seu IMC está muito acima do recomendado para a sua altura!</p>';

function initCursorBlink() {
    const cursor = document.querySelector('.cursor');

    function animaCursor() {
        cursor.classList.toggle('ativo');
    }
    setInterval(animaCursor, 500);
};

initCursorBlink();

function calcularIMC() {

    // Passo 1: Obter os campos
    let nome = document.querySelector('[name="nome"]').value;
    let peso = Number(document.querySelector('[name="peso"]').value);
    let altura = Number.parseFloat(document.querySelector('[name="altura"]').value);
    let resultado = document.getElementById('res');

    let magreza = document.getElementById('mag');
    let normal = document.getElementById('nor');
    let sobrepeso = document.getElementById('sob');
    let obesidade = document.getElementById('obe');
    let tabela = document.getElementsByTagName('tr');

    for (let i = 0; i < tabela.length; i++) {
        tabela[i].style.background = '';
        
    }
    resultado.innerHTML = '';
    resultado.style.background = '';

    // Passo 2: Validar os campos
    if (!nome || !peso || !altura) {
        resultado.innerHTML = '<p>Preencha todos os campos acima!</p>';
        resultado.style.background = 'red';
        resultado.style.color = 'white';
        return;
    }

    // Passo 3: Calcular o IMC
    let imc = peso / ((altura / 100) ** 2);

    // Passo 4: Definir a mensagem e estilo
    let mensagem = `<p>Olá ${nome}. Seu Índice de Massa Corporal é de ${imc.toFixed(2)}</p>`;
    let estilo;
    let condicao;

    switch (true) {
        case imc < 18.5:
          mensagem += msgMagreza
          estilo = '#EBE88D';
          condicao = magreza;
          break;
        case imc < 25:
          mensagem += msgNormal
          estilo = '#90FF93';
          condicao = normal;
          break;
        case imc < 30:
          mensagem += msgSobrepeso
          estilo = '#EBC48B';
          condicao = sobrepeso;
          break;
        default:
          mensagem += msgObesidade
          estilo = '#FF907E';
          condicao = obesidade;
          break;
    }
    resultado.innerHTML = mensagem;
    resultado.style.background = estilo;
    resultado.style.color = 'black';
    condicao.style.background = estilo;
}