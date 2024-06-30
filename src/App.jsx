import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Pokedex} from "./pages/Pokedex.jsx"
import Citas from "./pages/Citas.jsx"
import Home from "./pages/Home.jsx"
import Bebidas from "./pages/Buscador de bebidas/Header.jsx"
import Favoritos from "./pages/Buscador de bebidas/Favoritos.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/citas" element={<Citas/>}/>
        <Route element={<Bebidas/>}>
          <Route path="/favoritos" element={<Favoritos/>} index/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

