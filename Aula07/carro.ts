export class Carro{
    marca:string
    private velocidadeM:number
    cor:string
    constructor(_marca:string,_velocidadeM:number,_cor:string){
        this.marca=_marca
        this.velocidadeM=_velocidadeM
        this.cor=_cor
    }
    horn():void{
        console.log("O carro",this.marca,"bozina")
    }
    speed():void{
        console.log("A velocidade máxima do caro",this.marca,"é",this.velocidadeM)
    }
    color():void{
        console.log("a cor do carro é",this.cor)
    }
}