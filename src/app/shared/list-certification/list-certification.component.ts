import { Component, OnInit, Input } from '@angular/core';
import { ICertification } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-certification',
  templateUrl: './list-certification.component.html',
  styleUrls: ['./list-certification.component.scss']
})
export class ListCertificationComponent {
  @Input() certification: ICertification;
}
