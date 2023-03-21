import * as React from "react";
import styles from "./_Pokemonitem.module.scss";
export interface IPokemonitemProps {
  name: string;
  url: string;
}

export default function Pokemonitem(props: IPokemonitemProps) {
  return (
    <div className={styles.Pokemonitem}>
      <h1>{props.name}</h1>
      <div>{props.url}</div>
    </div>
  );
}
