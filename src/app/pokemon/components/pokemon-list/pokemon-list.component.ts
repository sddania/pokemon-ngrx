import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { loadGetPokemonLists } from '../../store/actions/get-pokemon-list.actions';
import { pokemonList } from '../../store/selectors/pokemon-list.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  pokemonList$ = this.store.select(pokemonList);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadGetPokemonLists({}))
  }

}
