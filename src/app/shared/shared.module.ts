import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports:[
    MatCardModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
