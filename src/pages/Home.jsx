import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <Link to="/Pokedex">
                <h1>Pokedex</h1>
            </Link>
            <Link to="/citas">
                <h1>Citas</h1>
            </Link>
            <Link to="/bebidas">
                <h1>Buscador de bebidas</h1>
            </Link>
        </>
    )
}
