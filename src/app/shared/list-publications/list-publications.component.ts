import { Component, OnInit, Input } from '@angular/core';
import { IPublication } from '../../services/api.service';

@Component({
  selector: 'app-list-publications',
  templateUrl: './list-publications.component.html',
  styleUrls: ['./list-publications.component.scss']
})
export class ListPublicationsComponent {
  @Input() publication: IPublication;

}
