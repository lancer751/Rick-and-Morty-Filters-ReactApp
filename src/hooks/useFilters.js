import { useContext } from "react";
import { FiltersContext } from "../contexts/Filters";
import {searchCharacters} from "../services/characters.js"
import { useCallback } from "react";
import { useState } from "react";


export function useFilters(){
    const {filters, setFilters, characters, setCharacters} = useContext(FiltersContext)
    const [loading, setLoading] = useState(false)

    const getCharacters = useCallback(async(search) => {
        try{
            setLoading(true)
            const newCharacters = await searchCharacters(search)
            setCharacters(newCharacters)
        }catch(e){
            throw new Error(e.message)
        }finally{
            setLoading(false)
        }
    },[]) 


    return {filters, setFilters, characters, getCharacters, loading}
}