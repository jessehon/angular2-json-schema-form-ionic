import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService, hasOwn } from 'angular2-json-schema-form';

@Component({
  selector: 'input-widget',
  templateUrl: 'ionic-input.template.html',
})
export class IonicInputComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: string;
  controlDisabled = false;
  boundControl = false;
  options: any;
  autoCompleteList: string[] = [];
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
      this.options.onChange(this.controlValue, this);
    }
    this.options.showErrors = true;
    this.jsf.updateValue(this, event.target.value);
  }
}
