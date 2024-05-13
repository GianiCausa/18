let personas = [];

//CREAMOS ALGUNA INSTANCIAS DE PERSONA Y LA AÑADIMOS AL ARRAY
let persona1 = {nombre : "Juan", edad : 30};
let persona2 = {nombre : "Carlita", edad : 24};

personas.push(persona1);
personas.push(persona2);

//CONVERTIMOS LOS ARRAY A FORMATO JSON
let personasJSON = JSON.stringify(personas);

//GUARDAMOS EL JSON EN EL LOCAL STORAGE
localStorage.setItem("personas", personasJSON);

//PARA RECUPERAR EL ARRAY DEL LOCAL STORAGE
let personasRecuperadas = JSON.parse(localStorage.getItem("personas"));

console.log(typeof(personasRecuperadas))
const llamar = ()=>{
    personasRecuperadas.map((personaRecuperada)=>{
        const {nombre, edad } = personaRecuperada;
        console.log(nombre);
        console.log(edad);
    })
}