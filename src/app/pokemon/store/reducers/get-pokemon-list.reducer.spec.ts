import { pokemonReducer } from "./get-pokemon-list.reducer";
import { initialState } from '../pokemon-store'
import { getPokemonListsSuccess } from "../actions/get-pokemon-list.actions";

describe("pokemon list reducer", () => {

  it("should set a list of pokemon", () => {
      const testValue = {
        result: {
          count: 1,
          next: null,
          previous: null,
          results: [{ name: 'test', url: 'test' }]
        }
      };

      const actual = pokemonReducer(initialState, getPokemonListsSuccess(testValue));

      expect(actual).toEqual({...initialState, result: testValue.result});
  })

  it('reducers', () => {
    let state;
    state = pokemonReducer({result:{count:0,results:[],next:null,previous:null},loading:false}, {type:'[GetPokemonList] call GetPokemonLists'});
    expect(state).toEqual({result:{count:0,results:[],next:null,previous:null},loading:true});
  });

})
