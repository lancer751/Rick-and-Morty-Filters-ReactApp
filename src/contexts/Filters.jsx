import { useState } from "react";
import { createContext } from "react";


export const FiltersContext = createContext()

export function FiltersProvider({children}){
    const [filters, setFilters] = useState({
        name: "",
        gender: "",
        status: "",
        species: ""
    })

    const [characters, setCharacters] = useState([])

    return(
        <FiltersContext.Provider value={{
            filters, 
            setFilters, 
            characters, 
            setCharacters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}