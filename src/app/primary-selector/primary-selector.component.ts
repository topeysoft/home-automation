import { Component, Input, ElementRef } from "@angular/core";
import 'jquery';
@Component({
    selector:'primary-selector',
    templateUrl:'./primary-selector.component.html',
    styleUrls:[
        './primary-selector.component.scss'
    ]
})
export class PrimarySelectorComponent{
   @Input() items:any[]=[];
   @Input() key:string;
   @Input() subHeaderText:string;
   
   activeItem:any={};
/**
 *
 */
constructor(private _hostRef:ElementRef) {
    
}
itemClick(item){
    this.items.forEach(i=>{
        i.selected=false;
    });
    item.selected=true;
    this.activeItem = item;
    var menu:HTMLElement = this._hostRef.nativeElement.querySelector('select-menu');
    this.setAnimationEnd(menu, (m)=> {
        menu.classList.remove('show');
        menu.classList.remove('popClose');
    });
    menu.classList.add('popClose');
    
    
}
activeClick(){
    var menu:HTMLElement = this._hostRef.nativeElement.querySelector('select-menu');
    this.setAnimationEnd(menu, (m)=> {
        menu.classList.remove('popOpen');
    });
    menu.classList.add('show');
    menu.classList.add('popOpen');
}

   ngOnInit(){
        
   }
   setAnimationEnd(element:HTMLElement, callfunction){
       $(element).one("webkitAnimationEnd animationend oanimationend", callfunction);
     //  element.addEventListener("animationend", callfunction,false);
     //  element.addEventListener("oanimationend", callfunction,false);
   }
   clearAnimationEnd(element:HTMLElement){
       element.removeEventListener("webkitAnimationEnd");
       element.removeEventListener("animationend");
       element.removeEventListener("oanimationend");
   }
}