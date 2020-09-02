import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.scss']
})
export class ListEducationComponent {
  @Input() education: IEducation;
}
