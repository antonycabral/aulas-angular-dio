import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/PokemonData';


@Injectable({
  providedIn: 'root'
})
export class PokemonServices {
  private baseURL: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}

  // Método para buscar dados de um Pokémon específico
  getPokemon(pokemonName: string): Observable<PokemonData> {
    // Retorna diretamente a requisição HTTP como um Observable
    return this.http.get<PokemonData>(`${this.baseURL}${pokemonName.toLowerCase()}`);
  }
}
