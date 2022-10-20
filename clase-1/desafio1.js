class Usuario {
    constructor(nombre, apellido, libros, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascota;
    }
}

let cagadita_95 = new Usuario('Santiago', 'Pedraza', [
    {
        nombreLibro: 'Harry Potter',
        tapa: 'Roja',
        codigo: 11500,
    },
    ["Pablo", "Federico", "Filipo"]])

    