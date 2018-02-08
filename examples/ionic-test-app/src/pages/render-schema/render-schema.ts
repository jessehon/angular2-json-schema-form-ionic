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
      textInput: "text value",
      checkInput: true,
      toggleInput: true,
      textareaInput: "textarea value",
      selectInput: "b",
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
          "title": "Toggle Input"
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
          "key": "textareaInput",
          "type": "textarea"
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
