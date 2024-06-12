import { useFilters } from "../hooks/useFilters"
import { useCallback } from "react"
import { useEffect } from "react"
import debounce from "just-debounce-it"

export function Filters(){
    const {filters, setFilters, getCharacters} = useFilters()

    const debouncedCharacters = useCallback(debounce((search)=>{
        getCharacters(search)
    }, 300),[])

    const handleSearch = (event) => {
        const newSearch = {...filters, name: event.target.value}
        setFilters(prevState => ({
            ...prevState,
            name: event.target.value
        }))
        debouncedCharacters(newSearch)
    }

    const handleChangeGender = (event) => {
        const newSearch = {...filters, gender: event.target.value}

        setFilters(prevState => ({
            ...prevState,
            gender: event.target.value
        }))
        getCharacters(newSearch)
    }

    const handleChangeStatus = (event) => {
        const newSearch = {...filters, status: event.target.value}

        setFilters(prevState => ({
            ...prevState,
            status: event.target.value
        }))
        getCharacters(newSearch)
    }

    const handleChangeSpecies = (event) => {
        const newSearch = {...filters, species: event.target.value}
        setFilters(prevState => ({
            ...prevState,
            species: event.target.value
        }))
        getCharacters(newSearch)
    }

    useEffect(()=> {
        getCharacters(filters)
    }, [])


    return(
        <section className="w-full mt-7">
            <div className="flex flex-wrap gap-4 justify-center">
                <input type="text" className="min-w-64 px-3 py-2 rounded-md" placeholder="Rick Sanchez, Morthy Smith, Jaguar..."
                onChange={handleSearch} value={filters.name}/>
                <select className="py-2 px-3 rounded-md" onChange={handleChangeGender}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknow">Unknow</option>
                </select>

                <select className="py-2 px-3 rounded-md" onChange={handleChangeStatus}>
                    <option value="">Status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknow">Unknow</option>
                </select>

                <select className="py-2 px-3 rounded-md" onChange={handleChangeSpecies}>
                    <option value="">Species</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                </select>
            </div>
        </section>
    )
}