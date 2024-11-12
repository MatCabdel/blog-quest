import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {

  articles$!: Observable<Article[]>;

  http = inject(HttpClient)

  private apiUrl = 'http://localhost:3000/articles';

  // private apiService = inject(ApiService);

  ngOnInit() {
    this.articles$ = this.getArticles();
}

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(this.apiUrl);
}

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
