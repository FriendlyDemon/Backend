export class Moto{
    marca:string
    velocidadeM:number
    cor:string
    constructor(x1:string,x2:number,x3:string){
        this.marca=x1
        this.velocidadeM=x2
        this.cor=x3
    }
    horn():void{
        console.log("A moto",this.marca,"bozina")
    }
    speed():void{
        console.log("A velocidade máxima da moto",this.marca,"é",this.velocidadeM)
    }
    color():void{
        console.log("a cor da moto é",this.cor)
    }
}