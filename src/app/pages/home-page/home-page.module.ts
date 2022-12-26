import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from "./home-page-routing.module";
import {ItemsViewModule} from "../../UI/items-view/items-view.module";
import {QueryBoxModule} from "../../UI/query-box/query-box.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    ItemsViewModule,
    QueryBoxModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule {
}
