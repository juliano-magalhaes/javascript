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
                img.setAttribute('src','menino-adolescente.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src','adulto-homem.jpg')
            } else {
                // idoso
                img.setAttribute('src','idoso.jpg')
            }
                
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //menina
                img.setAttribute('src','menina.jpg')
            } else if (idade < 18) {
                //adoslecente
                img.setAttribute('src','menina-adolescente.jpg')
            } else if (idade < 60) {
                img.setAttribute('src','adulta-mulher.jpg')
            } else {
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
