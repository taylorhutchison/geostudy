import { Component, OnInit } from '@angular/core';
import { StateAreaCodeData } from '../../interfaces/areaCodeData';
import { AreacodeService } from '../../services/areacode.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  allStates: StateAreaCodeData[] = [];
  filteredStates: StateAreaCodeData[] = [];

  constructor(private areaCodeService: AreacodeService) { }

  ngOnInit(): void {
    this.areaCodeService.getAllAreaCodes().subscribe(areaCodes => {
      this.allStates = areaCodes;
      this.filteredStates = this.allStates;
    });
  }

  stateSelected(changeEvent: Event) {
    const selectedState = (changeEvent.target as HTMLSelectElement).value;
    if(selectedState.toLowerCase() === 'all') {
      this.filteredStates = this.allStates;
    } else {
      this.filteredStates = this.allStates.filter(state => state.name.toLowerCase() === selectedState.toLowerCase());
    }
  }

}
