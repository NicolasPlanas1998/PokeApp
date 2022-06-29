const {    
    getAPIpokemons,
    getAll
    } = require('./middleware')
const { Router } = require('express');
const {Pokemon,Type} = require('../db')

const router = Router();

// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal
router.get("/pokemons", async(req,res)=>{
    let {name} = req.query;
    const pokemons = await getAll()
    try {
        if(!name) res.send(pokemons)
        else{
            const pokemonByName = pokemons.filter(el => el.name.toLowerCase() === name.toLowerCase())
            if(pokemonByName.length) res.send(pokemonByName)
            else res.status(404).send(`Pokemon: ${name} was not found`)
        }       
    } catch (error) {
        res.status(400).send(error) 
    }
})

// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
//* Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
router.get("/pokemons/:id", async (req,res)=>{
    const {id} = req.params
    const pokemons = await getAll() //!DEBERIA SER ALLPOKEMONS, LO MODIFICO CUANDO ARREGLE LA DB
    try {
        const pokemonById = pokemons.filter(el => el.id === parseInt(id))
        if(pokemonById.length) {
            res.send(pokemonById)
        }else{
            res.status(404).send(`Pokemon id: ${id} was not found`)
        }
    } catch (error) {
        res.send(error)
    }
})
//[ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
router.get("/types", async(req,res)=>{
    const pokemons = await getAPIpokemons()
    let allTypes = []
    pokemons.forEach(el=>{
        for(let i=0; el.Types.length > i; i++){
            if(!allTypes.includes(el.Types[i].name)) allTypes.push(el.Types[i].name)
        }
    })
    allTypes.forEach(el=>{
        Type.findOrCreate({
            where: {name: el}
        })
    })
    res.send(allTypes)
})


// [ ] POST /pokemons:`
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.
router.post("/pokemons", async (req,res)=>{
    const {
        name,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        Types   
    } = req.body
    try {
        let pokemonCreated = await Pokemon.create({
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight
        })
        let typeDb = await Type.findAll({
            where: {name: Types}
        }) // me parece totalmente al pedo esta linea //! Fijarme si la puedo borrar
        pokemonCreated.addType(typeDb)
        res.send("Successfully created")
    } catch (error) {
        res.send(error)   
    }
})
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
module.exports = router;
