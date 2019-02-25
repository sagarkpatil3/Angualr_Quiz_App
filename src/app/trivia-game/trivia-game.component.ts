import { Component, OnInit } from '@angular/core';
import { TriviaService } from './trivia.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css']
})
export class TriviaGameComponent implements OnInit {
  tmp = 1;
  q: any;
  sub: any;
  id: number;
  cQuestion: number;
  score: number;
  qNumber: number;

  constructor(private service: TriviaService,private route: ActivatedRoute, private router: Router) { 
    this.score = 0;
  }

  VerifyAnswer(o, e) {
    if (o == this.q.correct_answer) {
      this.score = this.score + 10 ;
    }
    if (this.id == this.qNumber) {
      localStorage.setItem('score', this.score.toString());
      this.router.navigate(['/result']);
    } else {
      this.router.navigate(['/question/' + (this.id + 1)]);
    }
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (localStorage.getItem('q') !== null) {
        var data = JSON.parse(localStorage.getItem('q'));
        this.qNumber = parseInt(localStorage.getItem('qNumber'));
        this.q = data.results[this.id - 1];
      } else {
        this.service.Questions();
        var data = JSON.parse(localStorage.getItem('q'));
        this.qNumber = parseInt(localStorage.getItem('qNumber'));
        this.q = data.results[this.id - 1]
      }
    });
  }

  
}
