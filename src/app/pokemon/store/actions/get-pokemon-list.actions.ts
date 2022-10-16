import { createAction, props } from '@ngrx/store';
import { NamedAPIResourceList } from 'pokenode-ts';

export const loadGetPokemonLists = createAction(
  '[GetPokemonList] call GetPokemonLists',
  props<{ offset?: number, limit?: number }>()
);

export const loadGetPokemonListsSuccess = createAction(
  '[GetPokemonList] call GetPokemonLists Success',
  props<{ result: NamedAPIResourceList }>()
);

export const loadGetPokemonListsFailure = createAction(
  '[GetPokemonList] call GetPokemonLists Failure',
  props<{ error: any }>()
);
