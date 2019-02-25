import { Component, OnInit } from '@angular/core';
import { TriviaService} from '../trivia-game/trivia.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: TriviaService) { }

  ngOnInit() {
    this.service.Questions();

  }

}
