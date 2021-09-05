import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MultiChoiceOption, MultiChoiceQuestion } from 'src/app/shared/interfaces/multiChoiceQuestion';
import { AreaCodeData } from '../interfaces/areaCodeData';
import { filter, first, map, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreacodeService {

  private data = new BehaviorSubject<AreaCodeData | null>(null);

  constructor(private http: HttpClient) { 
    http.get<AreaCodeData>('data/usa/areacodes.json').subscribe(data => {
      this.data.next(data);
    });
  }

  getAllAreaCodes() {
    return this.data.pipe(filter(data => data != null), first(), map(data => data!.states));
  }

  getQuestion(numberOfOptions: number = 4){
    return this.data.pipe(filter(data => data != null), first(), map(data => {
      const randomStateIndex = Math.floor(Math.random() * data!.states.length);
      const randomState = data!.states[randomStateIndex];
      const randomAreaCodeIndex = Math.floor(Math.random() * randomState.areaCodes.length);
      const randomAreaCode = randomState.areaCodes[randomAreaCodeIndex];
      const options = [{text: randomState.name, correct: true}];
      for(let i = 0; i < numberOfOptions-1; i++){ 
        const rand = Math.floor(Math.random() * data!.states.length);
        options.push({text: data!.states[rand].name, correct: false});
      }
      return {
        text: randomAreaCode,
        options: this.shuffle(options)
      } as MultiChoiceQuestion;
    }));
  }

  private shuffle(options: MultiChoiceOption[]) {
    let currentIndex = options.length;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [options[currentIndex], options[randomIndex]] = [options[randomIndex], options[currentIndex]];
    }
  
    return options;
  }
}
