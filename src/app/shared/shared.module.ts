import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';

@NgModule({
  declarations: [
    SidenavMenuComponent,
    AccordionItemComponent,
    AccordionContentComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    SidenavMenuComponent,
    AccordionItemComponent,
    AccordionContentComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
