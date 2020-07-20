class Persona{
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre,this.apellido,true)
        }
    }

    altura(){
        return this.altura>=170
    }
}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }

    saludar(fn){
        console.log(`SOY DeV, me llamo ${this.nombre} ${this.apellido}`)
        if(fn) {
            fn(nombre,apellido,false)
        }
    }
}

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log("ah mira eres Dev")
    }
}

let carlos = new Desarrollador("test","ortiz",175)

carlos.saludar(responderSaludo)
// carlos.altura()