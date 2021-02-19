import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  votes:number;
  title:string;
  link:string;

  constructor() { 
this.link="Angular";
this.title="http://angular.io";
this.votes=10;

  }

  ngOnInit(): void {
  }
voteUp() 
{
this.votes++;
}

voteDown() 
{
this.votes--;
}
}
