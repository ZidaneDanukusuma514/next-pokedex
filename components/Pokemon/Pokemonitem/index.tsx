import axios from "axios";
import * as React from "react";
import styles from "./_Pokemonitem.module.scss";

export interface spritesProps {
  front_default: string;
}

export interface ResultProps {
  name: string;
  sprites: spritesProps;
}

export interface IPokemonitemProps {
  name: string;
  url: string;
}

export default function Pokemonitem({ name, url }: IPokemonitemProps) {
  const [Result, setResult] = React.useState<ResultProps>();

  const handleItem = async () => {
    const { data } = await axios.get(url);
    setResult(data);
  };

  React.useEffect(() => {
    handleItem();
  }, []);

  return (
    <div className={styles.Pokemonitem}>
      <img src={Result?.sprites.front_default} alt={Result?.name} />
      <h1>{Result?.name}</h1>
    </div>
  );
}
