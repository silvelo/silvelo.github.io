import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-panel',
  templateUrl: './experience-panel.component.html',
  styleUrls: ['./experience-panel.component.scss']
})
export class ExperiencePanelComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() description: string;
}
