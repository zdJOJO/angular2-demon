/**
 * 自定义结构型指令
 * 
 * @class
*/

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[jojoUnless]"
})

export class UnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){ }

  private hasView: boolean

  @Input() set jojoUnless(condition: boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else if(condition && this.hasView){
      this.viewContainer.clear();
    }
    this.hasView = !this.hasView;
  }

}