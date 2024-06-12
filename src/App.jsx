import { Characters } from "./components/Characters"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { FiltersProvider } from "./contexts/Filters"

function App() {

  return (
    <>
      <FiltersProvider>
        <Header/>
        <Characters/>
        <Footer/>
      </FiltersProvider>
    </>
  )
}

export default App
