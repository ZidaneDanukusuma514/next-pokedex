import * as React from "react";
import styles from "./_Pokemonsearch.module.scss";
export interface IPokemonsearchProps {}

export default function Pokemonsearch(props: IPokemonsearchProps) {
  const [Search, setSearch] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit succesfull");
    console.log(Search);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here....."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
