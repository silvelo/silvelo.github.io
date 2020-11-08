import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications-card',
  templateUrl: './publications-card.component.html',
  styleUrls: ['./publications-card.component.scss']
})
export class PublicationsCardComponent {
  @Input() publications: IPublication[];

}
