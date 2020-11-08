import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-cards',
  templateUrl: './experience-cards.component.html',
  styleUrls: ['./experience-cards.component.scss']
})
export class ExperienceCardsComponent {
  @Input() experience: IExperience[];
}
