rd=require('readline-sync')
for (let i=1; i<11;i++) {
    console.log(i+"x5="+(i*5))
}
x=rd.question("insira um numero: ")
for (let i=1; i<11;i++) {
    console.log(x+"x"+i+"="+(i*x))
}
