import { useEffect, useState } from 'react'
import axios from "axios"
import { LinearProgress, Button } from '@mui/material';


export const FirsApp = () => {

    const [imgPokemon, setImgPokemon] = useState({ img: '', stats: [], types: [], name: "", tiposDanio: [], height: 0, weight: 0 })
    //const [imgPokemon, setImgPokemon] = useState(null)
    const colores = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    }


    const azar = () => {
        return Math.floor((Math.random() * 150))
    }

    const fetchPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + azar());
            console.log(response);
            let objPokemon = {
                img: response.data.sprites["other"]["official-artwork"]["front_default"],
                stats: response.data.stats,
                types: response.data.types,
                name: response.data.name,
                id: response.data.id,
                height: response.data.height,
                weight: response.data.weight
            }
            console.log(objPokemon);
            setImgPokemon(objPokemon)
            await debilidadesTipo(objPokemon)

        } catch (error) {
            console.error('Error fetching data from PokeAPI', error);
        }
    };

    const debilidadesTipo = async (pokemon) => {
        console.log(pokemon.types[0].type.name);
        if (!pokemon || !pokemon.types || !pokemon.types[0] || !pokemon.types[0].type) {
            console.error('imgPokemon.types[0].type está indefinido');
            return;
        }
        try {
            console.log(pokemon.types[0].type.name);
            const res = await axios.get('https://pokeapi.co/api/v2/type/' + pokemon.types[0].type.name);
            console.log(res);
            pokemon.tiposDanio = res.data.damage_relations.double_damage_from
            console.log(pokemon.tiposDanio);
            setImgPokemon(prev => ({ ...prev, tiposDanio: pokemon.tiposDanio }))

        } catch (error) {
            console.error('Error funcion debilidades', error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);


    return (
        <div style={{textAlign: 'center'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img style={{ height: "100px", width: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPCEu5wYHfkiJzriogDrM2_Tcfus-m1MLVw&s" alt="" />
                <img style={{ height: "100px", width: "300px" }} src="https://img.genial.ly/5e92f91205731330e40eb30f/1c6f47d4-6372-41ee-a639-e69a530a7bd8.png" alt="" />
                <img style={{ height: "100px", width: "200px" }} src="https://media.cnn.com/api/v1/images/stellar/prod/210226041654-05-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill" alt="" />
            </div>
            <div id="hijo">
                <div id='card' style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding:"10px", borderRadius: "20px", alignItems: 'center', backgroundColor: colores[imgPokemon.types[0]?.type.name] }}>
                            <h1 style={{ fontFamily:"cursive"}}>{imgPokemon.name.charAt(0).toUpperCase() + imgPokemon.name.slice(1)}</h1>
                            <img style={{ height: "70%", width: "70%" }} src={imgPokemon.img} alt="" />
                      
                        <div style={{ display: 'flex', width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                            <p style={{ color: "white", margin:"10px 0", fontStyle: "italic", fontSize:"30px"}}>Altura: {imgPokemon.height / 10}m</p>
                            <p style={{ color: "white", margin:"10px 0", fontStyle: "italic", fontSize:"30px"}}>Altura: {imgPokemon.weight / 10}kg</p>
                        </div>
                    </div>
                    <div id="tipos" style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems: "center", padding:"10px"}}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h1 style={{ fontSize: "100px", fontStyle: "italic", margin: "0", marginBottom: "10px", color: colores[imgPokemon.types[0]?.type.name] }}># {imgPokemon.id}</h1>
                        </div>
                        <div id='tiposPokemon' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h1 style={{ margin: "0", marginBottom: "20px", fontSize:"35px" }}>Tipos del pokemon</h1>
                            <div style={{ display: "grid", gridTemplateColumns: `repeat(${imgPokemon.types?.length > 1 && imgPokemon.types?.length < 3 ? 2 : imgPokemon.types?.length > 2 ? 3 : 1 }, 1fr)`, gap: "10px", justifyContent: 'center' }}>

                                {
                                    imgPokemon.types.map((e, i) => {
                                        return <div key={i} style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Button sx={{ background: colores[e.type.name] }} variant="contained" size="medium">{e.type.name}</Button>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                        <div id='debPokemon' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h1 style={{ margin: "0", marginBottom: "20px", marginTop: "10px", fontSize:"35px" }}>Debilidades del pokemon</h1>
                            <div style={{ display: "grid", gridTemplateColumns: `repeat(${imgPokemon.tiposDanio?.length > 1 && imgPokemon.tiposDanio?.length < 3 ? 2 : imgPokemon.tiposDanio?.length > 2 ? 3 : 1}, 1fr)`, gap: "10px", justifyContent: 'center', alignItems: "center" }}>
                                
                                {
                                    !imgPokemon.tiposDanio ?
                                        <p>No hay debilidades pokemon</p> :
                                        imgPokemon.tiposDanio.map((e, i) => {
                                            return <div key={i} style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                                <Button sx={{ background: colores[e.name] }} variant="contained" size="medium">{e.name}</Button>
                                            </div>

                                        })
                                }

                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ padding: "20px" }}>
                    <h1 style={{fontFamily:"cursive", margin:"0"}}>Estadisticas</h1>
                    <div>{imgPokemon.stats.map((element, i) => {
                        return <div key={i}>
                            <p style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>{element.stat.name.charAt(0).toUpperCase() + element.stat.name.slice(1)} : {element.base_stat}/255</p>
                            <LinearProgress variant="determinate" sx={{
                                backgroundColor: 'white',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: colores[imgPokemon.types[0]?.type.name]
                                }, height: "20px", borderRadius: "10px", border: "solid 1px black"
                            }} value={Math.floor((element.base_stat / 255) * 100)}></LinearProgress>
                        </div>
                    })}</div>

                </div>


            </div>
        </div>
    )
}

