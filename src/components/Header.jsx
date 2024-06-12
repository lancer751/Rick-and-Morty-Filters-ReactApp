import { Filters } from "./Filters";


export function Header(){

    return(
        <header className="text-center py-7">
            <h1 className="text-green-400 text-4xl">Rick And Morty</h1>
            <p></p>
            <Filters/>
        </header>
    )
}