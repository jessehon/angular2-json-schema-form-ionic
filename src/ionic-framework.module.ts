import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonSchemaFormService, WidgetLibraryModule } from 'angular2-json-schema-form';
import { IonicModule } from 'ionic-angular';
import { IonicButtonComponent } from './widgets/button/ionic-button.component';
import { IonicInputComponent } from './widgets/input/ionic-input.component';
import { IonicSelectComponent } from './widgets/select/ionic-select.component';
import { IonicCheckboxComponent } from './widgets/checkbox/ionic-checkbox.component';
import { IonicTextareaComponent } from './widgets/textarea/ionic-textarea.component';
import { IonicToggleComponent } from './widgets/toggle/ionic-toggle.component';
import { IonicFrameworkComponent } from './ionic-framework.component';

export const IONIC_FRAMEWORK_COMPONENTS = [
  IonicButtonComponent,
  IonicInputComponent,
  IonicCheckboxComponent,
  IonicTextareaComponent,
  IonicSelectComponent,
  IonicToggleComponent,
  IonicFrameworkComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgetLibraryModule,
  ],
  declarations: [ ...IONIC_FRAMEWORK_COMPONENTS ],
  exports: [ ...IONIC_FRAMEWORK_COMPONENTS ],
  entryComponents: [ ...IONIC_FRAMEWORK_COMPONENTS ],
  providers: [ JsonSchemaFormService ],
})
export class IonicFrameworkModule { }
