import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-award-panel',
  templateUrl: './award-panel.component.html',
  styleUrls: ['./award-panel.component.scss']
})
export class AwardPanelComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() url: string;
}
