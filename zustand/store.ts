import { create } from "zustand";

export interface Pokemonsprops {
  name: string;
  url: string;
}
export interface Storeprops {
  count: number;
  Pokemons: Pokemonsprops[];
  getPokemons: (props: Pokemonsprops[]) => void;
}

const useStore = create<Storeprops>((set) => ({
  count: 0,
  Pokemons: [],
  getPokemons: (props) => {
    set((state) => ({
      Pokemons: props,
    }));
  },
}));

export default useStore;
