import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from 'angular2-json-schema-form';

@Component({
  selector: 'textarea-widget',
  templateUrl: 'ionic-textarea.template.html',
})
export class IonicTextareaComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
  }

  updateValue(event) {
    if (!!this.options.onChange) {
      this.options.onChange(this.controlValue, this.layoutNode);
    }
    this.options.showErrors = true;
    this.jsf.updateValue(this, event.target.value);
  }
}
