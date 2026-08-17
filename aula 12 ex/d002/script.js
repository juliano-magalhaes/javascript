function veri() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.querySelector('div#resu')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 18) {
                //adolescente
            } else if (idade < 60) {
                // adulto
            } else {
                // idoso
            }
                
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}