import { Component, Input, OnInit } from '@angular/core';
import {
  MatSnackBarConfig,
  _SnackBarContainer
} from '@angular/material/snack-bar';

export declare type PanelTypes = 'experience' | 'education' | 'certificate';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent {
  @Input() data: IEducation[] = [];
  @Input() type: PanelTypes;
}
