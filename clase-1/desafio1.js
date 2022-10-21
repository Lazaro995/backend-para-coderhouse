class Usuario {
    constructor(nombre, apellido, libros, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `Hola mi nombre es ${this.nombre} ${this.apellido}`
    }

}
let cagadita = new Usuario('Santiago', 'Pedraza', [
    {
        nombreLibro: 'Harry Potter',
        tapa: 'Roja',
        codigo: 11500,
    },
    {
        nombreLibro: 'El señor de los anillos',
        tapa: 'azul',
        codigo: 110,
    }],
    ["Pablo", "Federico", "Filipo"])


console.log(cagadita.getFullName())