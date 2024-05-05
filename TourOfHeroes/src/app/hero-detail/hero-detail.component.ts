import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Hero} from "../heroes/hero";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{

  hero?: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  value = '';
  onEnter(value: string) {
    this.value = value;
  }
  update(value: string) {
    this.value = value;
  }
  fontSize: number = 16;
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.increaseFontSize();
    } else if (event.key === 'ArrowDown') {
      this.decreaseFontSize();
    }
  }
  increaseFontSize() {
    this.fontSize++;
  }

  decreaseFontSize() {
    if (this.fontSize > 1) {
      this.fontSize--;
    }
  }

  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   if (event.key === 'ArrowUp') {
  //     this.fontSize++; // Increase font size by one
  //   } else if (event.key === 'ArrowDown' && this.fontSize > 1) {
  //     this.fontSize--; // Decrease font size by one
  //   }
  // }
}
