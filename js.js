
class yo{
    constructor(nombre, apellido, age, pets, artist){
        this.nombre = nombre;
        this.apellido = apellido;
        this.age = age;
        this.pets = pets;
        this.artist = artist;

    }
}

const datos = [];
datos.push(new yo("Matias", "Minoni", "21", "Pappo, Zaira", "Kendrick_Lamar, Mac_Miller, Eminem, Drake"));

const GetFullName=console.log(datos[0].nombre + " " + datos[0].apellido);
// Añadir pets
const contar_pets=console.log(datos[0].pets.split(",").length);
const ObtenerKendrick=console.log(datos[0].artist.split(",")[0]);

console.log(datos)