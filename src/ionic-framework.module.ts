import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonSchemaFormService, WidgetLibraryModule } from 'angular2-json-schema-form';
import { IonicModule } from 'ionic-angular';
import { IonicButtonComponent } from './ionic-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgetLibraryModule,
  ],
  declarations: [
    IonicButtonComponent,
  ],
  exports: [
    IonicButtonComponent,
  ],
  providers: [
    JsonSchemaFormService,
  ]
})
export class IonicFrameworkModule { }
