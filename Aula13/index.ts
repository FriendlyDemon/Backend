/*
for (let i=10;i>=0;i--) {
    if (i%2==0&&i>1){
        console.log("TIC")
    }
    else if (i!=0){
        console.log("TAC")
    }
    else {
        console.log("BOOM")
    }
}
*/
/*
let ficcao={"Fundação":"Isaac Asimov","Duna":"Frank Herbert"}
for (let livro in ficcao) {
console.log(`Autor do livro "${livro}": ${ficcao[livro]}`)
}

console.log(Object.keys(ficcao)[0]) //volta "Fundação"
*/
/*
const num=[1,2,3,4,5,6,7,8,9]
for (const i of num) {
    console.log(i)    
}
*/

enum SaborPizza{
    portuguesa="Portuguesa",
    calabresa="Calabresa",
    canadense="Canadense"
}
enum TamanhoPizza{
    p="pequena",
    m="média",
    g="grande",
    xl="família"
}
class Pizza{
    private sabor:SaborPizza;
    private tamanho:TamanhoPizza;
    private preco:number;
    constructor(sabor:SaborPizza,tamanho:TamanhoPizza,preco:number){
        this.sabor=sabor
        this.tamanho=tamanho
        this.preco=preco
    }
    pizza(){`Pizza${this.sabor}, Tamanho ${this.tamanho}, Preço ${this.preco}`}
}
let portuguesa:Pizza=new Pizza(SaborPizza.portuguesa,TamanhoPizza.m,50)
