import * as React from "react";
import styles from "./_Pokemonlist.module.scss";
export interface IPokemonlistProps {
  children?: React.ReactNode;
}

export default function Pokemonlist({ children }: IPokemonlistProps) {
  return (
    <div className={styles.Pokemonlist}>
      <div className="grid-container">{children}</div>
    </div>
  );
}
