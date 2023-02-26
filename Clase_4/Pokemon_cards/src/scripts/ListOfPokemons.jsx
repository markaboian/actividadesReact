import React from "react";
import Pokemons from "./Pokemons";
import infoPokemon from "../assets/static/pokemons.json";
import styles from "../styles/mystyles.module.css"

const ListOfPokemons = ({ tipo }) => {

    const informacion = infoPokemon[tipo]

    return (
        <div>
            <h3 className={styles.pokemonType}>Tipo de Pokemon: {tipo}</h3>
            <div className={styles.divContainerPokemons}>
                {
                informacion.map(pokemon => (
                    <Pokemons key={pokemon.id} 
                    {...pokemon}
                    tipo={tipo}
                    />
                    
                ))
                }
            </div>
        </div>
    )
}

export default ListOfPokemons;