import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss']
})
export class AccordionContentComponent {
  @Input() certificate_url: string;
  @Input() publication_url: string;
  @Input() description: string;


}
