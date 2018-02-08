import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'render-schema',
  templateUrl: 'render-schema.html'
})
export class RenderSchemaPage {
  schema: any;
  model: any;

  constructor(public navCtrl: NavController) {
    this.model = {
      textinput: "textinputvalue",
      selectinput: "b",
      checkinput: true
    }
    this.schema = {
      "name": "test",
      "schema": {
        "textInput" : {
          "type": "string",
          "title": "Text Input"
        },
        "checkInput" : {
          "type": "boolean",
          "title": "Check Input"
        },
        "toggleInput" : {
          "type": "boolean",
          "title": "toggle"
        },
        "textareaInput" : {
          "type": "string",
          "title": "Textarea Input"
        },
        "selectInput" : {
          "type": "string",
          "title": "Select Input"
        },
      },
      "form": [
        "textInput",
        "checkInput",
        {
          "key": "toggleInput",
          "type": "toggle"
        },
        {
          "key": "selectInput",
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
          "key": "textareaInput",
          "type": "textarea"
        }
      ]
    }
  }
  onSubmit(data: any){
    console.log(data);
  }
  onChange(data: any){
    console.log(data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchemaFormViewerPage');
  }
}
