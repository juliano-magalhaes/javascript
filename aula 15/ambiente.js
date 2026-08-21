/*var num = [5, 8, 9, 3]

console.log(num)
console.log(`o conteudo dentro da primeira chave é ${num[0]}`)
console.log(`o conteudo dentro da ultima chave é ${num[3]}`)
console.log(`os conteudos de forma crescente fica ${num.sort()}`)
num.push(1)
console.log(num)
---------------------------*/

/*let valores = [8, 1, 7, 4, 2, 9]

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    -------------------------------------------*/

/*let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
----------------------------------------------- */

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`A array tem ${num.length} posições`)
var pos = num.indexOf(5)
if (pos == -1) {
    console.log(`Valor não encontrado`)
} else {
    console.log(`o Valor está na posição ${pos}`)
}
