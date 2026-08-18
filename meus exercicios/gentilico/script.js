function verificar() {
    var país = document.getElementById('pais')
    var resu = document.getElementById('resu')
    var gent = document.querySelector('strong#gent')
    var band = document.querySelector('div#bandeira')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (país.value == 'Brasil') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Brasileiro'
        document.body.style.background = 'green'
        img.setAttribute('src','imagens/brasil.webp')
    } else if (país.value == 'Argentina') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Argentino'
        document.body.style.background = '#6CACE4'
        img.setAttribute('src','imagens/argentina.webp')
    } else if (país.value == 'Chile') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Chileno'
        document.body.style.background = 'blue'
        img.setAttribute('src','imagens/chile.webp')
    } else if (país.value == 'Bolivia') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Boliviano'
        document.body.style.background = 'darkgreen'
        img.setAttribute('src','imagens/bolivia.webp')
    } else if (país.value == 'Colombia') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Colombiano'
        document.body.style.background = 'yellow'
        img.setAttribute('src','imagens/colombia.webp')
    } else if (país.value == 'Equador') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Equatoriano'
        document.body.style.background = ''
        img.setAttribute('src','imagens/equador.webp')
    } else if (país.value == 'Paraguai') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Paraguiaio'
        document.body.style.background = 'Blue'
        img.setAttribute('src','imagens/paraguai.webp')
    } else if (país.value == 'Peru') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Peruano'
        document.body.style.background = 'red'
        img.setAttribute('src','imagens/peru.webp')
    } else if (país.value == 'Suriname') {
        resu.innerHTML = país.value
        gent.innerHTML = 'surinamês'
        document.body.style.background = 'green'
        img.setAttribute('src','imagens/suriname.webp')
    } else if (país.value == 'Uruguai') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Uruguaio'
        document.body.style.background = '#0038A8'
        img.setAttribute('src','imagens/uruguai.webp')
    } else if (país.value == 'Venezuela') {
        resu.innerHTML = país.value
        gent.innerHTML = 'Venezuelano'
        document.body.style.background = 'yellow'
        img.setAttribute('src','imagens/venezuela.webp')
    } else {
        alert('País não cadastrado')
    }
    band.innerHTML = ''
    band.appendChild(img)
}

