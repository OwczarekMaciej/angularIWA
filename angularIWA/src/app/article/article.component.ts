import {Component, Input, OnInit} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  @Input() article!: Article;

  constructor() {}

  Upvote(): boolean {
    this.article?.voteUp();
    return false;
  }

  Downvote(): boolean {
    this.article?.voteDown();
    return false;
  }

  ngOnInit() {}
}
