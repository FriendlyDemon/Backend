// npm  install -g typescript
// npx tsc "arquivo".ts
// em ts sempre tipar com ":string/number/boolean/void"
rd=require('readline-sync')
function fun1(){console.log("hello world")}
function fun2(){console.log("Who are you?")}
function fun3(){console.log("test test")}

eval(rd.question("choose a function (fun1,fun2,fun3): "))()
