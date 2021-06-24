import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;
  @Input() links: any[];
}
