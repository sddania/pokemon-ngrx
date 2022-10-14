import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { PokemonState } from '../pokemon-store';
import { pokemonReducer } from './get-pokemon-list.reducer';

export const reducers: ActionReducerMap<{ pokemon: PokemonState }> = {
  pokemon: pokemonReducer
};
