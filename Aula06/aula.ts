class Carro {
    marca:string
    cor:string
    potencia:number

    constructor (brand:string,color:string,power:number){
        this.marca=brand
        this.cor=color
        this.potencia=power
    }
    acelerar(){
        console.log(`O carro da marca ${this.marca} está acelerando`)
    }
    buzinar(){
        console.log(`O carro da cor ${this.cor} buzina`)
    }
    motor(){
        console.log(`O motor do carro tem ${this.potencia}cv de potência`)
    }
}
const meucarro:Carro=new Carro("VW","preto",500)