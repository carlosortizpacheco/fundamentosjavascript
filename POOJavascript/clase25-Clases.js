class Persona{
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    altura(){
        return this.altura>=170
    }
}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }

    saludar(){
        console.log(`SOY DeV, me llamo ${this.nombre} ${this.apellido}`)
    }
}



let carlos = new Desarrollador("test","ortiz",175)

carlos.saludar()
// carlos.altura()