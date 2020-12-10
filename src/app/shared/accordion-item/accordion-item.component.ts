import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input() logo: string;
  @Input() title: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() showEndDate: boolean = true;
  @Input() showExpand: boolean = false;

  public expandedHeight = '80px';
  public collapsedHeight = '80px';
}
