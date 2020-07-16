function heredade (prototipoHijo,prototipoPadre) {
    var fn = function(){}

    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn

    prototipoHijo.prototype.constructor = prototipoHijo

}


function Persona (nombre,apellido,altura) {
    this.nombre = nombre 
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.altura = function() {
    return this.altura>=170
}

function Desarrollador(nombre,apellido) {
    this.nombre =nombre
    this.apellido = apellido
}

heredade(Desarrollador,Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`SOY desarrolador, me llamo ${this.nombre} ${this.apellido}`)
}


console.log("TEST")



let carlos = new Desarrollador("carlos","ortiz",175)

carlos.saludar()
// carlos.altura()