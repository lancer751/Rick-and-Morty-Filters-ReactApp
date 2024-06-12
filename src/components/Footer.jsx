import { useFilters } from "../hooks/useFilters"

export function Footer(){
    const {filters} = useFilters()

    return(
        <footer className="fixed w-max bottom-2 inset-x-4 p-2 rounded-md text-white bg-black/70">
            {JSON.stringify(filters, 2, null)}
        </footer>
    )
}