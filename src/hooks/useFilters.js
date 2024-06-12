import { useContext } from "react";
import { FiltersContext } from "../contexts/Filters";
import { useState } from "react";
import withResults from "../mocks/with-results.json"
import {searchCharacters} from "../services/characters.js"
import { useCallback } from "react";


export function useFilters(){
    const {filters, setFilters, characters, setCharacters} = useContext(FiltersContext)


    const getCharacters = useCallback(async(search) => {
        try{
            const newCharacters = await searchCharacters(search)
            setCharacters(newCharacters)
        }catch(e){
            throw new Error(e.message)
        }
    },[]) 


    return {filters, setFilters, characters, getCharacters}
}