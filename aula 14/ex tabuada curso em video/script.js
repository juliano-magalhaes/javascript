function contar() {
    let n = Number(document.getElementById('n').value)
    var resu = document.getElementById('resu')
    resu.innerHTML = ''


    if (n == 0) {
        alert('Digite um número')
    } else {
        for(var tab = 1; tab <= 10; tab++) {
            let item = document.createElement('option')
            item.text = `${n} x ${tab} = ${n * tab}`
            
            resu.appendChild(item)
        }
    }

}