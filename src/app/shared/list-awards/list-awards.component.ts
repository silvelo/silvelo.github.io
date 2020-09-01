import { Component, OnInit, Input } from '@angular/core';
import { IAward } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-awards',
  templateUrl: './list-awards.component.html',
  styleUrls: ['./list-awards.component.scss']
})
export class ListAwardsComponent {
  @Input() award: IAward;

}
