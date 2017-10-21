import { Pokemon } from './../../model/pokemon';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PokemonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonProvider {

  static readonly POKEDEX_URI = 'https://pokeapi.co/api/v1/pokedex/1/';

  constructor(public http: Http) {
    console.log('Hello PokemonProvider Provider');
  }

  getPokemons() { // Retorna todos os pokemons
    return this.http.get(PokemonProvider.POKEDEX_URI)
           .map((result) => result.json().pokemon.map((obj) => {
             return new Pokemon(obj.name, obj.resource_uri);
           }));
  }

  getPokemon(id) { // Retorna os detalhes de um pokemon específico
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
           .map((result) => result.json());
  }

}
