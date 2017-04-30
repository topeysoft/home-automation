import { Component } from '@angular/core';
import { AppService } from "services/app.service";
import { TabModel } from "models/tab.model";
import { HomeComponent } from "app/home/home.component";
import { TemperatureComponent } from "app/controls/temperature/temperature.component";
import { LightComponent } from "app/controls/light/light.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  /**
   *
   */
  tabs:TabModel[]|any[];
  currentTab:any={};
  rooms:any[];
  constructor(public appSvc:AppService) {
    this.rooms=[
      {name:'Kitchen', selected:true},
      {name:'Living Room'},
      {name:'Theater'}
      ]
     this.tabs=[
       {title:'Temperature', icon:'ion-ios-snowy', data:{component:TemperatureComponent, inputs:{}}},
       {title:'Lights', icon:'ion-ios-lightbulb-outline', data:{component:LightComponent, inputs:{}}},
       {title:'Mood Lighting', icon:'ion-ios-color-filter-outline', data:{component:TemperatureComponent, inputs:{}}},
       {title:'Outlets', icon:'ion-social-buffer-outline', data:{component:HomeComponent, inputs:{}}}
     ]
  }

tabChange(tab){
  this.currentTab=tab;
}
}
