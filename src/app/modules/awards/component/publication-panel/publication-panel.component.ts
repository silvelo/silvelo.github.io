import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-panel',
  templateUrl: './publication-panel.component.html',
  styleUrls: ['./publication-panel.component.scss']
})
export class PublicationPanelComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() publication: string;
  @Input() url: string;
}
