import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonClient } from 'pokenode-ts';
import { mergeMap, map, catchError, from, of } from 'rxjs';
import { getPokemonLists, getPokemonListsFailure, getPokemonListsSuccess } from '../actions/get-pokemon-list.actions';



@Injectable()
export class PokemonListEffects {

  loadPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(getPokemonLists),
    mergeMap(({ offset, limit }) => from(this.pokemonClient.listPokemons(offset, limit))
      .pipe(
        map(result => getPokemonListsSuccess({ result })),
        catchError(error => of(getPokemonListsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonClient: PokemonClient
  ) { }
}
