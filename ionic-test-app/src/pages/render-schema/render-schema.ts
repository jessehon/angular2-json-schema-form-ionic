import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicFrameworkComponent, IonicButtonComponent, IonicInputComponent } from 'angular2-json-schema-form-ionic';
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
        'text': IonicInputComponent
      }
    };
    this.schema = {
      "name": "measurement",
      "schema": {
        "prop1" : {
          "title": "OK"
        },
        "prop2" : {
          "type": "string"
        },
      },
      "form": [
        {
          "type": "button",
          "title": "OK"
        },
        'prop2'
      ]
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchemaFormViewerPage');
  }
}
