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
    }

    this.schema = {
      "name": "test",
      "schema": {
        'type': 'object',
        'properties':{
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
            "title": "Textarea Input",
          },
          "selectInput" : {
            "type": "string",
            "title": "Select Input"
          },
        },
        'required': ["textareaInput", "textInput"]
      },
      "form": [
        {
          "key": "textInput",
          "labelPosition": "floating",
          "validationMessages": {
            "required": "Text input required"
          }
        },
        "checkInput",
        {
          "key": "toggleInput",
          "type": "toggle"

        },

        {
          "key": "textareaInput",
          "type": "textarea",
          "validationMessages": {
            "required": "Text area required"
          }
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
      { 'type': "submit", 'title': "Create" }
      ]
    }
  }
  onSubmit(data: any){
    console.log(data);
  }
  onChange(data: any){
    console.log(data);
  }
}
