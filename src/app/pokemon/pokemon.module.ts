import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPokemonStore from './store/pokemon-store';
import { reducers } from './store/reducers';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { EffectsModule } from '@ngrx/effects';
import { PokemonListEffects } from './store/effects/pokemon-list.effects';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPokemonStore.pokemonStoreFeatureKey, reducers),
    MatTableModule,
    MatPaginatorModule,
    EffectsModule.forFeature([PokemonListEffects])
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonModule { }
