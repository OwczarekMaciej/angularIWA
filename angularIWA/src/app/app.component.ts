import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {Article} from "./article/article.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularIWA';
  articles!: Article[];

  constructor() {
    this.articles = [
      new Article('Bootstrap', "https://getbootstrap.com/", 61),
      new Article('Bootstrap', "https://youtube.com/", 21)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if(title.value == '' || link.value == '') {
      alert('Please fill in both fields');
    } else {
      this.articles.push(new Article(title.value, link.value, 0));
      console.log(`Adding article title: ${title.value} and link: ${link.value}`);
      title.value = '';
      link.value = '';
    }
    return false;
  }

}
