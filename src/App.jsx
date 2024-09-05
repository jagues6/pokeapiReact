import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Pokedex} from "./pages/Pokedex/Pokedex.jsx"
import Citas from "./pages/Citas Veterinaria/Citas.jsx"
import Home from "./pages/Home.jsx"
import Bebidas from "./pages/Buscador de bebidas/Header.jsx"
import Favoritos from "./pages/Buscador de bebidas/Favoritos.jsx"
import {Carrito} from "./pages/Carrito de compras/Carrito.jsx"
import {Buscador} from "./pages/Buscador de bebidas/Buscador.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/citas" element={<Citas/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route element={<Bebidas/>}>
          <Route path="/bebidas" element={<Favoritos/>} index/>
          <Route path="/buscador" element={<Buscador/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

