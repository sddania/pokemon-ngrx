import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonClient } from 'pokenode-ts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    PokemonModule,
  ],
  providers: [
    { provide: PokemonClient, useValue: new PokemonClient() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
