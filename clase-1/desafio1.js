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
    addMascota(nuevaMascota) {
        //addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas
        this.mascotas.push(nuevaMascota);
    }
    countMascotas() {
        //countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario
        return this.mascotas.length;
        //Preguntar como hacerlo con return
    }
    addBook(book, autor) {
        /*addBook(String, String):void. Recibe un string'nombre' y un string 'autor'
        y debe agregar un objeto:{nombre: String, autor: String} al array de libros.*/
        this.libros.push({
            "nombre": book,
            "autor": autor,
        });
    }
    getBookNames() {
        //getBookNames(): String[]. Retorna un array con solo los nombres del array de libros de usuario.
        let nombresLibros = []
        this.libros.array.forEach(item => nombresLibros.push(item.nombre));
        return nombresLibros;

    };
};
let mascotas = ['cocodrilo', 'cebra']
let libros = [
    {
        "nombre": "Jumanji",
        "autor": "tuvi"
    },
    {
        "nombre": "Mi planta de naranja lima",
        "autor": "la lima"
    }
]

// A
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



cagadita.addMascota(nombreDeMascota = 'brandon')
cagadita.countMascotas()
cagadita.addBook('')
cagadita.getBookNames()
console.log(cagadita)

