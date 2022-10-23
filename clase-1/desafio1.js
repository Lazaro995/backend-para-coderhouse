class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
        // Preguntar como hacerlo con return
    }
    addMascota() {
        this.mascotas.push(nombreDeMascota);
    }
    countMascotas() {
        console.log(`La cantidad de mascotas que tiene es ${this.mascotas.lenght}`);
        //Preguntar como hacerlo con return
    }
    addBook() {
        this.libros.push({
            nombre: nombreDelLibro,
            autor: autorDelLibro,
        });
    }
    getBookNames() {
        return this.libros.map((libros) => this.libros.nombre) // 
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
    ["Pablo", "Federico", "Filipo"]);

    console.log(cagadita)

