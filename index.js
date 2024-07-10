
const fs = require('node:fs')
/*
const content = {test1:"hammer",test2:"nail",test3:"board"}
fs.writeFile('test.json', JSON.stringify(content), err=>{console.error(err)})
*/
const response =fetch("./test.json")
const data = response.json
console.log(data)