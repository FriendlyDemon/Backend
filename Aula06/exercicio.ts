class Character{
    name:string
    type:string
    strength:number
    health:number

    constructor(nome:string,tipo:string,forca:number,saude:number){
        this.name=nome
        this.type=tipo
        this.strength=forca
        this.health=saude
    }
    attack(alvo:any){
        if (this.strength>=alvo.health) {
            console.log(`${this.name} ataca ${alvo.name} e causa ${alvo.health} de dano`)
            console.log(`${alvo.name} está morto`)
            alvo.health=0
        } else {
            alvo.health-=this.strength
            console.log(`${this.name} ataca ${alvo.name} e causa ${this.strength} de dano`)
        }
    }
    checkHealth():void{
        if (this.health!=0) {
        console.log(`${this.name} tem ${this.health} pontos de vida`)
    } else {
        console.log(`${this.name} está morto`)
    }}
}
const guerreiro:Character=new Character("Aragorn","pc",20,100)
const monstro:Character=new Character("Uruk-Hai","npc",50,30)
monstro.checkHealth()
guerreiro.attack(monstro)
monstro.checkHealth()
guerreiro.attack(monstro)