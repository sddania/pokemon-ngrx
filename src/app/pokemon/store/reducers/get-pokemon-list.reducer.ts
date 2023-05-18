import { createReducer, on } from "@ngrx/store";
import { initialState, PokemonState } from "../pokemon-store";
import * as getPokemonListAction from '../actions/get-pokemon-list.actions'

export const pokemonReducer = createReducer<PokemonState>(
  initialState,
  on(getPokemonListAction.getPokemonLists, state => ({ ...state, loading: true, sss: true })),
  on(getPokemonListAction.getPokemonListsSuccess, (state, { result }) => ({ ...state, loading: false, result })),
  on(getPokemonListAction.getPokemonListsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
