import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicFrameworkComponent, IonicButtonComponent } from 'angular2-json-schema-form-ionic';
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
      }
    };

    this.schema = {
      "name": "measurement",
      "schema": {
        "type": "object",
        "properties": {
          "prop1" : {
            "type": "string"
          },
          "prop2" : {
            "type": "string"
          },
        }
      },
      "form": [
        'prop1',
        'prop2'
      ],
      "model": {
        "assetMeters": []
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchemaFormViewerPage');
  }
}