import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState, pokemonStoreFeatureKey } from '../pokemon-store';

const pokemonFeatureSelector = createFeatureSelector<{ pokemon: PokemonState }>(pokemonStoreFeatureKey);

const pokemonSelector = createSelector(pokemonFeatureSelector, s => s.pokemon);

export const pokemonList = createSelector(pokemonSelector, s => s.result.results ?? []);

export const pokemonListCount = createSelector(pokemonSelector, s => s.result.count);

export const pokemonListError = createSelector(pokemonSelector, s => s.error);

export const pokemonListLoading = createSelector(pokemonSelector, s => s.loading);


