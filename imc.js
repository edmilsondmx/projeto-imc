function calcular(){
    var nome = window.document.getElementsByName('nome')[0];
    var peso = window.document.getElementsByName('peso')[0]
    var altura = window.document.getElementsByName('altura')[0]
    var res = window.document.getElementById('res')
    var no = (nome.value)
    var pe = Number(peso.value)
    var alt = Number.parseFloat(altura.value)
    var imc = pe / ((alt / 100) * (alt / 100))
    var mag = document.getElementById('mag')
    var nor = document.getElementById('nor')
    var sob = document.getElementById('sob')
    var obe = document.getElementById('obe')
    
    obe.style.background = '#ffffff'
    mag.style.background = '#ffffff'
    nor.style.background = '#ffffff'
    sob.style.background = '#ffffff'
    
    if (imc > 30){
        res.innerHTML = `<p>Olá ${no}. Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC está muito acima do recomendado para a sua altura!</p>'
        res.style.background = '#FF907E'
        obe.style.background = '#FF907E'
        mag.style.background = '#linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        nor.style.background = '#linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        sob.style.background = '#linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
    } else if (imc < 18.5) {
        res.innerHTML = `<p>Olá ${no}. Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC está abaixo do recomendado para a sua altura!</p> '
        res.style.background = '#EBE88D'
        mag.style.background = '#EBE88D'
        obe.style.background = '#linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        nor.style.background = '#linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        sob.style.background = '#linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
    } else if (imc < 25) {
        res.innerHTML = `<p>Olá ${no}. Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC é considerado normal para a sua altura!</p>'
        res.style.background = '#90FF93'
        nor.style.background = '#90FF93'
        obe.style.background = 'linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        mag.style.background = 'linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        sob.style.background = 'linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
    } else if (imc <= 30) {
        res.innerHTML = `<p>Olá ${no}. Seu Indice de Massa Corporal é de ${imc.toFixed(2)}</p>`
        res.innerHTML += '<p>De a cordo com a OMS, seu IMC está acima do recomendado para a sua altura!</p>'
        res.style.background = '#EBC48B'
        sob.style.background = '#EBC48B'
        obe.style.background = 'linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        mag.style.background = 'linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
        nor.style.background = 'linear-gradient(90grad, rgba(193, 199, 193, 0.829), rgba(163, 160, 189, 0.836))'
    } else {
        res.innerHTML = ('<p>Preencha os campos acima!</p>')
        res.style.background = 'red'
        res.style.color = 'white'
        
    }
    
    


    
}
