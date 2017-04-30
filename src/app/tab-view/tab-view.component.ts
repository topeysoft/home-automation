import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TabModel } from "models/tab.model";

@Component({
    selector:'tab-view',
    templateUrl:'./tab-view.component.html',
    styleUrls:[
        './tab-view.component.scss'
    ]
})
export class TabViewComponent{
   @Input() tabs:TabModel[]=[];
   @Input() showText:boolean=true;
   @Input() showIcon:boolean=true;
  
  @Output() tabChanged:any= new EventEmitter();
  setActiveTabByIndex(index:number){
        this.setActiveTab(this.tabs[index]);
  }
  setActiveTab(tab:TabModel){
      this.tabs.forEach((t,i)=>{
          t.active=false;
        });
        tab.active=true;
        this.tabChanged.emit(tab);
  }
  tabClick(tab){
    this.setActiveTab(tab);
  }
  ngAfterViewInt(){
      this.setActiveTabByIndex(1);
  }
}
