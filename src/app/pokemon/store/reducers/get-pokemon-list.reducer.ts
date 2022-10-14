import { createReducer, on } from "@ngrx/store";
import { initialState, PokemonState } from "../pokemon-store";
import * as getPokemonListAction from '../actions/get-pokemon-list.actions'

export const pokemonReducer = createReducer<PokemonState>(
  initialState,
  on(getPokemonListAction.loadGetPokemonLists, state => ({ ...state, loading: true })),
  on(getPokemonListAction.loadGetPokemonListsSuccess, (state, { result }) => ({ ...state, loading: false, result })),
  on(getPokemonListAction.loadGetPokemonListsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
