import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QueryBoxComponent} from './query-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    QueryBoxComponent
  ],
  exports: [
    QueryBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QueryBoxModule {
}
