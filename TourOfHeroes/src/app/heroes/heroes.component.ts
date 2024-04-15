import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  heroes = HEROES
  selecredHero: Hero;

  constructor() {
  }

  ngOnInit(){
  }

  onSelect(hero: Hero) {
    this.selecredHero = hero;
    console.log(this.selecredHero);
  }

}
