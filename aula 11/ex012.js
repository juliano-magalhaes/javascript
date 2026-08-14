var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`Agora são ${hora}hrs Bom dia`)
} else if (hora < 18) {
    console.log(`Agora são ${hora}hrs Bom tarde`)
} else {
    console.log(`Agora são ${hora}hrs Boa noite`)
}
