import { createAction, props } from '@ngrx/store';
import { NamedAPIResourceList } from 'pokenode-ts';

export const getPokemonLists = createAction(
  '[GetPokemonList] call GetPokemonLists',
  props<{ offset?: number, limit?: number }>()
);

export const getPokemonListsSuccess = createAction(
  '[GetPokemonList] call GetPokemonLists Success',
  props<{ result: NamedAPIResourceList }>()
);

export const getPokemonListsFailure = createAction(
  '[GetPokemonList] call GetPokemonLists Failure',
  props<{ error: any }>()
);
