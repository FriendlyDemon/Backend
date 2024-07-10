export class pai{
    nome:string
    idade:number

    constructor(nome:string, idade:number){
        this.nome=nome
        this.idade=idade
    }

    andar():void{
        console.log(this.nome,'andou até a cozinha')
    }
}