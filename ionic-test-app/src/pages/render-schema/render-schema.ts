import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicFrameworkComponent, 
  IonicButtonComponent, 
  IonicInputComponent, 
  IonicCheckboxComponent, 
  IonicSelectComponent, 
  IonicTextareaComponent } from 'angular2-json-schema-form-ionic';

@Component({
  selector: 'render-schema',
  templateUrl: 'render-schema.html'
})
export class RenderSchemaPage {
  schema: any;
  framework: any;
  constructor(public navCtrl: NavController) {
    this.framework = {
      framework: IonicFrameworkComponent,
      widgets: {
        'button': IonicButtonComponent,
        'text': IonicInputComponent,
        'select': IonicSelectComponent,
        'textarea': IonicTextareaComponent,
        'checkbox': IonicCheckboxComponent,
        'submit': 'button',
      }
    };
    this.schema = {
      "name": "test",
      "schema": {
        "textinput" : {
          "type": "string",
          "title": "Text Input"
        },
        "checkinput" : {
          "type": "boolean",
          "title": "Check Input"
        },
        "textareainput" : {
          "type": "string",
          "title": "Textarea Input"
        },
        "selectinput" : {
          "type": "string",
          "title": "Select Input"
        },
      },
      "form": [
        "textinput",
        "checkinput",
        {
          "key": "selectinput",
          "type": "select",
          "titleMap": [
            {
              "value": "a",
              "name": "A"
            },
            {
              "value": "b",
              "name": "B"
            },
            {
              "value": "c",
              "name": "C"
            }
          ]
        },
        {
          "key": "textareainput",
          "type": "textarea"
        }
      ]
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchemaFormViewerPage');
  }
}
