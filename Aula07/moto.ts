export class Moto{
    marca:string
    private velocidadeM:number
    cor:string
    constructor(_marca:string,_velocidadeM:number,_cor:string){
        this.marca=_marca
        this.velocidadeM=_velocidadeM
        this.cor=_cor
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