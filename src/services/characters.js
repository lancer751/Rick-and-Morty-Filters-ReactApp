
export const searchCharacters = async(filters) =>{
    // const isCompleted = Object.values(filters).every(filter => filter === '')

    // if(isCompleted) return 

    const {name, gender, species, status} = filters

    try{
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}&species=${species}`)
        const json = await res.json()
        const characters = json.results
        

        return characters?.map(item => ({
            "char_id": item.id,
            "char_name": item.name,
            "char_status": item.status,
            "char_specie": item.species,
            "char_gender": item.gender,
            "char_image": item.image,
            "location": item.location.name,
            "created": item.created
        }))
    
    }catch(e){
        throw new Error('Error in searchCharacters()')
    }

} 