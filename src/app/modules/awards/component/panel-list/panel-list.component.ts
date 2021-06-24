import { Component, Input, OnInit } from '@angular/core';

export declare type PanelTypes = 'award' | 'publication';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent {
  @Input() data = [];
  @Input() type: PanelTypes;
}
