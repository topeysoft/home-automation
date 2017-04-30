import { PrimarySelectorComponent } from "app/primary-selector/primary-selector.component";
import { TabViewComponent } from "app/tab-view/tab-view.component";
import { HomeComponent } from "app/home/home.component";
import DynamicComponent from "app/dynamic-component/dynamic-component";
import { TemperatureComponent } from "app/controls/temperature/temperature.component";
import { LightComponent } from "app/controls/light/light.component";

export const TSC_COMPONENTS = [
    PrimarySelectorComponent
    ,DynamicComponent
    ,TabViewComponent
    ,HomeComponent
    ,TemperatureComponent,
    LightComponent
]