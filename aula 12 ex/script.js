function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora}h`
    if (hora >= 0 && hora <= 12) {
        msg.innerHTML = 'Bom dia, como vai a sua tia'
        document.body.style.background = 'yellow'
        document.body.style.color = 'black'
    } else if (hora >=12 && hora <= 18) {
        msg.innerHTML = 'Boa tarde, meu querido'
        document.body.style.background = 'red'
    } else {
        msg.innerHTML = 'Boa noite, meu xovem'
        document.body.style.background = 'black'
    }
}