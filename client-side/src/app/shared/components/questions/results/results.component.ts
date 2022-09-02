import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {QuestionsService} from "@app/core/services/questions.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  description: any;

  constructor(
    public authService: AuthService,
    private router: Router,
    public questions: QuestionsService
  ) {
  }

  ngOnInit() {


    const userScore = {
      "score": this.questions.correctAnswerCount
    };
    this.authService.updateScore(userScore)
      .toPromise()
      .then()
      .catch(err => {
        console.log(err);
      });
    this.getLevel();
  }

  getLevel() {
    this.authService.getProfile()
      .toPromise()
      .then((data: any) => {
        this.description = this.questions.getLevelDescription(data.user.level);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
