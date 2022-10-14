import { NamedAPIResourceList } from "pokenode-ts";

export const pokemonStoreFeatureKey = 'pokemon';

export interface PokemonState {
  result: NamedAPIResourceList,
  loading: boolean,
  error?: Error
}

export const initialState: PokemonState = {
  result: {
    count: 0,
    results: [],
    next: null,
    previous: null
  },
  loading: false,
  error: undefined
}
