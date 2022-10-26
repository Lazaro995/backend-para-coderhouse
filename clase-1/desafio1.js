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
    addMascota(newMascota) {
        //addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas
        this.mascotas.push(newMascota);
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
            nombre: book,
            autor: autor,
        });
    }
    getBookNames() {
        return this.libros.map(item => item.nombre)
    }
};
const mascotas = ['cocodrilo', 'cebra'];
const libros = [
    {
        nombre: "Jumanji",
        autor: "tuvi",
    },
    {
        nombre: "Mi planta de naranja lima",
        autor: "la lima",
    },
]

// A
let cagadita = new Usuario('Santiago', 'Pedraza', libros, mascotas);
console.log(cagadita.getFullName());
// B
cagadita.addMascota("RATA");
cagadita.addMascota("cholo");
// C
console.log(cagadita.countMascotas());
// D
cagadita.addBook("You dont know about Javascript", "Midudev");
// E
console.log(cagadita.getBookNames());