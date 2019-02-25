import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  Questions() {
    return this.http.get(this.apiUrl).subscribe(
      data => {
        console.log(data);
        for (var i = 0; i < data['results'].length - 1; i++) {
          var j = i + Math.floor(Math.random() * (data['results'].length - i));
          var temp = data['results'][j];
          data[j] = data['results'][i];
          data[j].incorrect_answers.push(data[j].correct_answer);
          data[i] = temp;
        }
        localStorage.setItem('q', JSON.stringify(data))
        localStorage.setItem('qNumber', JSON.stringify(data['results'].length));
      },
      error => {
        console.log(error);
      }
    );
  }
}
