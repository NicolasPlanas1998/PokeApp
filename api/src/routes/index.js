const {    
    pokemonInfo,
    getAPIpokemons,
    getDbPokemon,
    getAll} = require('./middleware')
const { Router } = require('express');

// const {Pokemon, Property} = require('./db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


//!Rutas de prueba
router.post("/pokemons", async (req,res)=>{
    try {
      const newPokemon = await Pokemon.create(req.body)
      res.send(newPokemon)
    } catch (error) {
      res.send(error)
    }
  })



//! Entiendo que aca iria el codigo de rutas
// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal
router.get("/pokemons", async(req,res)=>{
    try {
        const pokemons = await getAPIpokemons()
        // const {idPokemon} = req.query
        res.send(pokemons)
       
    } catch (error) {
        res.status(400).send(error) // Modificar esto con una pestana en react de error
    }
})

//! Crear funciones para obtener info necesaria de la API

// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
//* Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon


// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado


// [ ] POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.


  
  // [ ] GET /types:
  // Obtener todos los tipos de pokemons posibles
  // En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
