import {Component, OnInit} from '@angular/core';
import { Hero } from "../heroes/hero";
import { HeroService } from "../hero.service";
import {NgFor} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
