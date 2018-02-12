import { Component, Input, Host } from '@angular/core';
import { hasValue, JsonPointer, JsonSchemaFormService } from 'angular2-json-schema-form';

@Component({
  selector: 'ionic-root-widget',
  templateUrl: 'ionic-root.template.html'
})
export class IonicRootComponent {
  options: any;
  @Input() dataIndex: number[];
  @Input() layoutIndex: number[];
  @Input() layout: any[];
  @Input() isOrderable: boolean;
  @Input() isFlexItem = false;

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  isDraggable(node: any): boolean {
    return node.arrayItem && node.type !== '$ref' &&
      node.arrayItemType === 'list' && this.isOrderable !== false;
  }

  showWidget(layoutNode: any): boolean {
    return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
  }
}