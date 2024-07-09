import {Carro} from "./carro"
import {Moto} from "./moto"
const meuCarro=new Carro("VW", 110, "preto")
const minhaMoto=new Moto("Hitachi", 160, "preta")
function getVel(){
    return this.velocidadeM
}
function setVel(novaVelocidadeM:number){
    if (novaVelocidadeM > 0){
    this.velocidadeM=novaVelocidadeM
    } else {
        console.log(`Velocidade máxima tem que ser maior que 0`)
    }
}
meuCarro.horn()
minhaMoto.color()
console.log(getVel.call(meuCarro))
setVel.call(meuCarro,200)
console.log(getVel.call(meuCarro))