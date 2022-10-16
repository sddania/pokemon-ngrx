import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { getPokemonLists } from '../../store/actions/get-pokemon-list.actions';
import { pokemonList, pokemonListCount } from '../../store/selectors/pokemon-list.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  pokemonList$ = this.store.select(pokemonList);
  pokemonListCount$ = this.store.select(pokemonListCount);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getPokemonLists({}))
  }

  setPage(evt: PageEvent) {
    this.store.dispatch(getPokemonLists({
      offset: evt.pageIndex * evt.pageSize,
      limit: evt.pageSize
    }))
  }
}
