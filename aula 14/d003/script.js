function contar() {
    let n = Number(document.getElementById('n').value)
    let resu = document.getElementById('resu')
    resu.innerHTML = `Tabuada do <strong>${n}</strong>: <br>`

    if (n == 0) {
        alert('Digite um número')
    } else {
        for(var tab = 1; tab <= 10; tab++) {
            var x = n * tab
            resu.innerHTML += `${n} x ${tab} = ${x} <br>`
        }
    }

}