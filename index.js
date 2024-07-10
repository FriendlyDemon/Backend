
const fs = require('node:fs')
/*
const content = {test1:"hammer",test2:"nail",test3:"board"}
fs.writeFile('test.json', JSON.stringify(content), err=>{console.error(err)})
*/
function james() {
  let x = fetch("./test.json")
  let y = x.JSON
  return y
}

console.log(james())