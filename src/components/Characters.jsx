import { useFilters } from "../hooks/useFilters";

function ListOfCharacters({characters}){
    return(
        <section className="grid lg:grid-cols-2 justify-items-center items-center gap-4 py-7">
            {
                characters.map(character => (
                    <article className="w-full max-w-sm h-full md:w-full sm:max-w-xl rounded-xl overflow-hidden bg-white grid grid-rows-[270px,1fr]    sm:grid-rows-1 sm:grid-cols-[1.7fr,_3fr]" key={character.char_id}>
                        <picture className="w-full relative">
                            <img src={character.char_image} alt={character.char_name} className="w-full h-full object-cover bg-center aspect-square"/>
                            <span className={`text-white absolute px-2 py-1 top-2 left-2 rounded-md ${
                                character.char_status.toLowerCase() === 'alive'?
                                'bg-green-500'
                                : character.char_status.toLowerCase() === 'unknown' && character.char_status.toLowerCase() !== 'alive'?
                                    'bg-gray-500'
                                : 'bg-red-500'
                                }`}>
                                {character.char_status}
                            </span>
                        </picture>
                        <div className="flex-1 py-3 px-4 space-y-4 sm:py-6">   
                            <h5 className="text-blue-900 text-xl">{character.char_name}</h5>
                            <p className="flex gap-1">
                                <span className="bg-orange-400 text-white px-2 py-1 rounded-md">{character.char_specie}</span>
                                <span className="bg-rose-700 text-white px-2 py-1 rounded-md">{character.char_gender}</span>
                            </p>
                            <p className="text-cyan-900 font-semibold text-lg">
                                Location: <span className="text-slate-400 text-normal font-light">{character.location}</span>
                            </p>
                            <p className="text-cyan-900 font-semibold text-lg">
                                Created: <span className="text-slate-400 text-normal font-light">{character.created}</span>
                            </p>
                        </div>
                    </article>
                ))
            }
            
        </section>
    )
}

function NoResults(){
    return(
        <p className="text-white text-center">There is nothing here.</p>
    )
}


export function Characters(){
    const {characters} = useFilters()
    const hascharacters = characters?.length > 0;

    return(
       hascharacters? <ListOfCharacters characters={characters}/> : <NoResults/>
    )
}