import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsViewComponent } from './items-view.component';
import {CardViewModule} from "../card-view/card-view.module";
import {HighlightModule} from "../../core/directives/highlight/highlight.module";



@NgModule({
    declarations: [
        ItemsViewComponent
    ],
    exports: [
        ItemsViewComponent
    ],
  imports: [
    CommonModule,
    CardViewModule,
    HighlightModule
  ]
})
export class ItemsViewModule { }
