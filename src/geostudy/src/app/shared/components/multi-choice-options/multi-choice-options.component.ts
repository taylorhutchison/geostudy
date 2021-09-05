import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MultiChoiceOption } from '../../interfaces/multiChoiceQuestion';

@Component({
  selector: 'app-multi-choice-options',
  templateUrl: './multi-choice-options.component.html',
  styleUrls: ['./multi-choice-options.component.scss']
})
export class MultiChoiceOptionsComponent implements OnInit {

  @Input()
  options: {text: string, correct: boolean}[] = [];

  @Output()
  selected = new EventEmitter<MultiChoiceOption>();

  constructor() { }

  ngOnInit(): void {
  }

}
