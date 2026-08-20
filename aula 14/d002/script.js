function contar() {
    var ni = Number(document.getElementById('ni').value)
    var nc = Number(document.getElementById('nc').value)
    var nf = Number(document.getElementById('nf').value)
    var resu = document.getElementById('resu')
    resu.innerHTML = 'Contando... <br>'
    
    if(ni == 0 || nc == 0 || nf ==0){
        alert('ERRO impossivel contar')
    } else {
        if (ni < nf) {
            for(var c = ni; c <= nf; c += nc){
                resu.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(var c = ni; c >= nf; c -= nc) {
                resu.innerHTML += `${c} \u{1f449} `
            }
        }
    }
    resu.innerHTML += '<br> Acabou \u{1f3c1}'
}