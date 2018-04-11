import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService, buildTitleMap, isArray } from 'angular2-json-schema-form';

@Component({
  selector: 'select-widget',
  templateUrl: 'ionic-select.template.html',
})
export class IonicSelectComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  selectList: any[] = [];
  isArray = isArray;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.selectList = buildTitleMap(
      this.options.titleMap || this.options.enumNames,
      this.options.enum, !!this.options.required, !!this.options.flatList
    );
    this.jsf.initializeControl(this);
  }

  updateValue(value) {
    if (!!this.options.onChange) {
      this.options.onChange(this.controlValue, this);
    }
    this.options.showErrors = true;
    this.jsf.updateValue(this, value);
  }
}
