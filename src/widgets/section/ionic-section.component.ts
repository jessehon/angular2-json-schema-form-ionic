import { Component, Input, OnInit } from '@angular/core';
import { toTitleCase, JsonSchemaFormService } from 'angular2-json-schema-form';

@Component({
  selector: 'ionic-section-widget',
  templateUrl: 'ionic-section.template.html',
  styles: [`
    .legend { font-weight: bold; }
    .expandable > legend:before, .expandable > label:before { content: '▶'; padding-right: .3em; }
    .expanded > legend:before, .expanded > label:before { content: '▼'; padding-right: .2em; }
  `],
})
export class IonicSectionComponent implements OnInit {
  options: any;
  expanded = true;
  containerType: string;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  get sectionTitle() {
    return this.options.notitle ? null : this.jsf.setItemTitle(this);
  }

  ngOnInit() {
    this.jsf.initializeControl(this);
    this.options = this.layoutNode.options || {};
    this.expanded = typeof this.options.expanded === 'boolean' ?
      this.options.expanded : !this.options.expandable;
    switch (this.layoutNode.type) {
      case 'fieldset': case 'array': case 'tab': case 'advancedfieldset':
      case 'authfieldset': case 'optionfieldset': case 'selectfieldset':
        this.containerType = 'fieldset';
      break;
      default: // 'div', 'flex', 'section', 'conditional', 'actions', 'tagsinput'
        this.containerType = 'div';
      break;
    }
  }
  toggleExpanded() {
    if (this.options.expandable) { this.expanded = !this.expanded; }
  }
}