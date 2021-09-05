import { Component, OnInit } from '@angular/core';
import { MultiChoiceQuestion, MultiChoiceOption } from 'src/app/shared/interfaces/multiChoiceQuestion';
import { AreacodeService } from '../../services/areacode.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  currentQuestion: MultiChoiceQuestion | undefined;
  message: string = "";

  constructor(private areaCodeService: AreacodeService) { }

  ngOnInit(): void {
    this.nextQuestion();
  }

  nextQuestion() {
    this.areaCodeService.getQuestion().subscribe(question => {
        this.currentQuestion = question;
    });
  }

  checkAnswer(answer: MultiChoiceOption) {
    if(answer.correct) {
      this.message = "Correct!";
      setTimeout(() => {
        this.nextQuestion();
        this.message = "";
      }, 1000);
    }
    else {
      this.message = "Incorrect!";
    }
  }

}
