import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications-cards',
  templateUrl: './certifications-cards.component.html',
  styleUrls: ['./certifications-cards.component.scss']
})
export class CertificationsCardsComponent {
  @Input() certifications: ICertification[];
}
