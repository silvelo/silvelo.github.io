import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Angulartics2Module.forRoot(),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ]
})
export class CoreModule { }
