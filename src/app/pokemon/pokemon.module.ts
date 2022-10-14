import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPokemonStore from './store/pokemon-store';
import { reducers } from './store/reducers';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPokemonStore.pokemonStoreFeatureKey, reducers),
    MatTableModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonModule { }
