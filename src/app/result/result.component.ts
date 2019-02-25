import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.score = localStorage.getItem('score');
  }

  restart(){
    localStorage.clear();
  }


}
