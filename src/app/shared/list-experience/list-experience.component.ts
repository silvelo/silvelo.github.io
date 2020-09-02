import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.scss']
})
export class ListExperienceComponent {
  @Input() experience: IExperience;

}
