import React from "react";
import styles from "../styles/mystyles.module.css"

const borderColor = (tipo) => {
    switch (tipo) {
        case "water":
            return "10px solid blue"
            break;
        case "fire":
            return "10px solid red"
            break;
        case "electric":
            return "10px solid yellow"
            break;
        case "air":
        default:
            return "10px solid green"
            break;
    }
}

const Pokemons = ({id, name, avatar, powerLevel, agressive, tipo}) => {
    return (
        <div className={styles.divPokemon} style={{border: `${borderColor(tipo)}`}}>
            <p className={styles.paragraphPokemon}>{name}</p>
            <p className={styles.paragraphPokemon}>Nivel de poder: {powerLevel}</p>
            <img src={avatar} alt={name} className={styles.imgs}/>
        </div>
    )
}

export default Pokemons;