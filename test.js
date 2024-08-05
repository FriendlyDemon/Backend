const fs = require('node:fs')
function _Ref(pasta,arquivo,quantidade) {
    doc=require('./'+pasta+'/'+arquivo+'.js').body
    for (i=0;i<=quantidade;i++){
    fs.writeFileSync('./_Ref/'+pasta+'/'+arquivo+i+'.json', JSON.stringify(doc), err=>{})}}

_Ref('tests','numbs','2')