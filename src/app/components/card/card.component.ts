import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { PokemonServices } from '../../services/pokemon-services.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonData } from '../../models/pokemonData';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, HttpClientModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [PokemonServices]
})
export class CardComponent implements OnInit {

  pokemon:PokemonData
  
  constructor(
    private service: PokemonServices
  ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {front_default:""},
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
      next:(res)=>{
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error:(err)=>{
        console.log('not found')
      }
    })
  }

}
