class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        //getFullName(): String. Rertona el completo del usuario. Utilizar template strings.
        return `Hola mi nombre es ${this.nombre} ${this.apellido}`;
        // Preguntar como hacerlo con return
    }
    addMascota() {
        //addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas
        this.mascotas.push(nombreDeMascota);
    }
    countMascotas() {
        //countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario
        return `La cantidad de mascotas que tiene es ${this.mascotas.length}`;
        //Preguntar como hacerlo con return
    }
    addBook() {
        /*addBook(String, String):void. Recibe un string'nombre' y un string 'autor'
        y debe agregar un objeto:{nombre: String, autor: String} al array de libros.*/
        this.libros.push({
            nombre: nombreDelLibro,
            autor: autorDelLibro,
        });
    }
    getBookNames() {
        //getBookNames(): String[]. Retorna un array con solo los nombres del array de libros de usuario.
        return this.libros.map(function (item) {
                return item.nombreLibro;
            });
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



cagadita.addMascota(nombreDeMascota = "emanuel")
cagadita.countMascotas()
cagadita.addBook(nombreDelLibro = "Mi super planta", autorDelLibro = "Emanuel Brandon")
cagadita.getBookNames()

