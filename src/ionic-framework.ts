import { Injectable } from '@angular/core';

import { Framework } from  'angular2-json-schema-form';

import { IonicButtonComponent } from './widgets/button/ionic-button.component';
import { IonicInputComponent } from './widgets/input/ionic-input.component';
import { IonicCheckboxComponent } from './widgets/checkbox/ionic-checkbox.component';
import { IonicFrameworkComponent } from './ionic-framework.component';
import { IonicTextareaComponent } from './widgets/textarea/ionic-textarea.component';
import { IonicSelectComponent } from './widgets/select/ionic-select.component';
import { IonicToggleComponent } from './widgets/toggle/ionic-toggle.component';
import { IonicTabsComponent} from './widgets/tabs/ionic-tabs.component';
import { IonicSectionComponent} from './widgets/section/ionic-section.component';
import { IonicRootComponent } from './widgets/root/ionic-root.component';

@Injectable()
export class IonicFramework extends Framework {
  name = 'ionic';

  framework = IonicFrameworkComponent;

  stylesheets = [];

  widgets = {
    'root':            IonicRootComponent,
    'section':         IonicSectionComponent,
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