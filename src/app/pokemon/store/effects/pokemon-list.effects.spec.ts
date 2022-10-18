import { TestBed } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from "@ngrx/store";
import { NamedAPIResourceList, PokemonClient } from "pokenode-ts";
import { Observable, of } from "rxjs";
import { getPokemonLists, getPokemonListsSuccess } from "../actions/get-pokemon-list.actions";
import { PokemonListEffects } from "./pokemon-list.effects";

describe("pokemon list effect test", () => {
  let actions$ = new Observable<Action>();

  const pokemonServiceSpy = jasmine.createSpyObj('PokemonClient', ['listPokemons'])
  let effects: PokemonListEffects

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        { provide: PokemonClient, useValue: pokemonServiceSpy },
        PokemonListEffects
      ],
    });

    effects = TestBed.inject(PokemonListEffects);
  })

  it("should return a list of pokemon", () => {
    actions$ = of(getPokemonLists({}));

    // mock the service to prevent an HTTP request
    const results = [
      { name: "bulbasaur", url: "http://test/1" },
      { name: "squirtle", url: "http://test/2" }
    ];
    const stub: NamedAPIResourceList = {
      count: 2,
      previous: null,
      next: null,
      results
    }
    // const stub2: NamedAPIResourceList = {
    //   count: 2,
    //   previous: null,
    //   next: null,
    //   results
    // }
    pokemonServiceSpy.listPokemons.and.returnValue(of(stub));

    // subscribe to the Effect stream and verify it dispatches a SUCCESS action
    effects.loadPokemon$.subscribe(action => {
      expect(action).toEqual(getPokemonListsSuccess({ result: stub }));
    });
  });
})
