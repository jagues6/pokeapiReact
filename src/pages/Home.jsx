import { Link } from "react-router-dom";
import homeBebidas from "../images/homeBebidas.jpg"
import homeVeterinaria from "../images/homeVeterinaria.jpg"
import homeCarrito from "../images/homeCarrito.jpg"
import homePokedex from "../images/homePokemon.jpg"
import { Button } from '@mui/material';

export default function Home() {
    return (
        <>
            <div style={{ backgroundColor: '#3b5998' }}>
                <h1 style={{ textAlign: 'center', color: "white", fontFamily: "Helvetica", marginTop:"20px" }}>Bienvenidos a proyectos Javascript</h1>
            </div>
            <div className="home">
                <div className="col">
                    <div style={{ backgroundColor: '#3b5998', width: '100%', borderRadius: "10px 10px 0 0" }}>
                        <h2 style={{ textAlign: 'center', margin: "10px", color: "white" }}>Pokedex</h2>
                    </div>
                    <img className="homeBebidas" src={homePokedex} alt="" />
                    <Link to="/Pokedex" style={{ margin: "20px 0" }}>
                        <Button variant="outlined">Pokedex</Button>
                    </Link>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: '#3b5998', width: '100%', borderRadius: "10px 10px 0 0" }}>
                        <h2 style={{ textAlign: 'center', margin: "10px", color: "white" }}>Carrito de compras</h2>
                    </div>
                    <img className="homeBebidas" src={homeCarrito} alt="" />
                    <Link to="/pokedex" style={{ margin: "20px 0" }}>
                        <Button variant="outlined">Carrito</Button>
                    </Link>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: '#3b5998', width: '100%', borderRadius: "10px 10px 0 0" }}>
                        <h2 style={{ textAlign: 'center', margin: "10px", color: "white" }}>Citas veterinaria</h2>
                    </div>
                    <img className="homeBebidas" src={homeVeterinaria} alt="" />
                    <Link to="/citas" style={{ margin: "20px 0" }}>
                        <Button variant="outlined">Citas</Button>
                    </Link>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: '#3b5998', width: '100%', borderRadius: "10px 10px 0 0" }}>
                        <h2 style={{ textAlign: 'center', margin: "10px", color: "white" }}>Buscador de bebidas</h2>
                    </div>
                    <img className="homeBebidas" src={homeBebidas} alt="" />
                    <Link to="/bebidas" style={{ margin: "20px 0" }}>
                        <Button variant="outlined">Buscador de bebidas</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
