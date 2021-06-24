import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-panel',
  templateUrl: './certificate-panel.component.html',
  styleUrls: ['./certificate-panel.component.scss']
})
export class CertificatePanelComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() url: string;
}
