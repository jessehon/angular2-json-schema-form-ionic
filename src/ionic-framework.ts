import { Injectable } from '@angular/core';

import { Framework } from  'angular2-json-schema-form';

// Material Design Framework
// https://github.com/angular/material2
import { IonicButtonComponent } from './widgets/button/ionic-button.component';
import { IonicInputComponent } from './widgets/input/ionic-input.component';
import { IonicCheckboxComponent } from './widgets/checkbox/ionic-checkbox.component';
import { IonicFrameworkComponent } from './ionic-framework.component';
import { IonicTextareaComponent } from './widgets/textarea/ionic-textarea.component';
import { IonicSelectComponent } from './widgets/select/ionic-select.component';
import { IonicToggleComponent } from './widgets/toggle/ionic-toggle.component';
import { IonicTabsComponent} from './widgets/tabs/ionic-tabs.component';

@Injectable()
export class IonicFramework extends Framework {
  name = 'ionic';

  framework = IonicFrameworkComponent;

  stylesheets = [];

  widgets = {
    'button':          IonicButtonComponent,
    'checkbox':        IonicCheckboxComponent,
    'toggle':          IonicToggleComponent,
    'select':          IonicSelectComponent,
    'text':            IonicInputComponent,
    'textarea':        IonicTextareaComponent,
    'tabs':            IonicTabsComponent,
    'submit':          'button'
  };
}