import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-cards',
  templateUrl: './education-cards.component.html',
  styleUrls: ['./education-cards.component.scss']
})
export class EducationCardsComponent {
  @Input() education: IEducation[];
}
