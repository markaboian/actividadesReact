import React, {Component} from "react";
import ListOfPokemons from "./scripts/ListOfPokemons";
import styles from "./styles/mystyles.module.css"

const App = () =>{
    return (
        <div className={styles.background}>
            <h2 className={styles.title}>Pokemons!</h2>
            <ListOfPokemons tipo="fire"/>
        </div>
    )
}

export default App;