import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list-certification',
  templateUrl: './list-certification.component.html',
  styleUrls: ['./list-certification.component.scss']
})
export class ListCertificationComponent {
  @Input() certification: ICertification;
}
