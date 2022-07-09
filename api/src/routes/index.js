const {    
    getAPIpokemons,
    getAll
    } = require('./middleware')
const { Router } = require('express');
const {Pokemon,Type} = require('../db')

const router = Router();

// [ ] GET /pokemons:
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
router.get("/pokemons/:id", async (req,res)=>{
    const {id} = req.params
    const pokemons = await getAll() 
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
router.post("/pokemons", async (req,res)=>{
    const {
        name,
        life,
        attack,
        defense,
        speed,
        height,
        img,
        weight,
        Types   
    } = req.body
    try {
        let pokemonCreated = await Pokemon.create({
            name,
            life,
            attack,
            img,
            defense,
            speed,
            height,
            weight
        })
        let typeDb = await Type.findAll({
            where: {name: Types}
        }) 
        pokemonCreated.addType(typeDb)
        res.send("Successfully created")
    } catch (error) {
        res.send(error)   
    }
})
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
module.exports = router;
