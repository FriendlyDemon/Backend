import {pai} from "./pai"
import {filho} from "./filho"
import {neto} from "./neto"

let ovideo:pai=new pai("Ovideo",74)
let marcio:filho=new filho("Marcio",52,"Caic")
let henrique:neto=new neto("Henrique",30,"Gusmão",true)
ovideo.andar()
marcio.andar()
marcio.estudar()
henrique.andar()
henrique.estudar()
henrique.comer()