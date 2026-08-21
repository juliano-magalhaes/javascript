var d = [document.getElementById('d1'), document.getElementById('d2'), document.getElementById('d3'), document.getElementById('d4')]

function pintar() {
        d[0].style.background = 'yellow'
        d[3].style.background = 'yellow'
        d[0].style.transform = 'translateX(100px)'
}

function branco() {
    d[0].style.background = 'aqua'
    d[3].style.background = 'aqua'
    d[0].style.transform = 'translateX(0px)'
}