import { DetalhePage } from './../detalhe/detalhe';
import { PokemonProvider } from './../../providers/pokemon/pokemon';
import { Pokemon } from './../../model/pokemon';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemons: Pokemon[] = [];

  constructor(public navCtrl: NavController, public pokemonProvider: PokemonProvider) {

    pokemonProvider.getPokemons().subscribe((pokemons) =>{
      this.pokemons = pokemons;

    })

    
  }
  exibirDetalhe(p){
    this.navCtrl.push(DetalhePage, {pokemon: p})
  }
  
}
