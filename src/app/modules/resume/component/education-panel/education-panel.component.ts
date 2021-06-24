import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-panel',
  templateUrl: './education-panel.component.html',
  styleUrls: ['./education-panel.component.scss']
})
export class EducationPanelComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() description: string;
}
