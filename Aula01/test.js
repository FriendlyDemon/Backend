const rd = require('readline-sync')
let name = rd.question('What is your name: ')
let var1 = ['test1','test2']
let doc = rd.keyInSelect(var1, `${name}, what document do you want to open:`)
function info(x1) {
    let {body} = require(`./${var1[x1]}.js`)
    return body
}
console.log(info(doc))