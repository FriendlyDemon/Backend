const rd = require('readline-sync')
let name = rd.question('What is your name: ')
let var1 = ['test1.js','test2.js']
let doc = rd.keyInSelect(var1, `${name}, what document do you want to open:`)
function info(x1) {
    let {text} = require(`./${var1[x1]}`)
    return text
}

console.log(info(doc))