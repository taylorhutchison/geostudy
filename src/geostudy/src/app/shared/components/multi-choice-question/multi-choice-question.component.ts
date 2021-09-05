import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MultiChoiceOption, MultiChoiceQuestion } from '../../interfaces/multiChoiceQuestion';

@Component({
  selector: 'app-multi-choice-question',
  templateUrl: './multi-choice-question.component.html',
  styleUrls: ['./multi-choice-question.component.scss']
})
export class MultiChoiceQuestionComponent implements OnInit {

  @Input()
  question: MultiChoiceQuestion | undefined;

  @Output()
  selected = new EventEmitter<MultiChoiceOption>();

  constructor() { }

  ngOnInit(): void {
  }

}
