function calcular(){
    var nome = window.document.getElementsByName('nome')[0];
    var peso = window.document.getElementsByName('peso')[0]
    var altura = window.document.getElementsByName('altura')[0]
    var res = window.document.getElementById('res')
    var no = (nome.value)
    var pe = Number(peso.value)
    var alt = Number.parseFloat(altura.value)
    var imc = pe / (alt * alt)
    
    if (imc > 30){
        res.innerHTML = `<p>Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC está muito acima do recomendado para a sua altura!</p>'
        res.style.background = '#FF907E'
    } else if (imc < 18.5) {
        res.innerHTML = `<p>Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC está abaixo do recomendado para a sua altura!</p> '
        res.style.background = '#EBE88D'
    } else if (imc < 25) {
        res.innerHTML = `<p>Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC é considerado normal para a sua altura!</p>'
        res.style.background = '#90FF93'
    } else if (imc <= 30) {
        res.innerHTML = `<p>Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC está acima do recomendado para a sua altura!</p>'
        res.style.background = '#EBC48B'
    } else {
        res.innerHTML = ('<p>Preencha os campos acima!</p>')
        
    }
    
}
