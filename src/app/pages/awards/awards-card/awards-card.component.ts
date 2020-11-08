import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards-card',
  templateUrl: './awards-card.component.html',
  styleUrls: ['./awards-card.component.scss']
})
export class AwardsCardComponent {
  @Input() awards: IAward[];
}
