import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentDetail } from './student//studentDetail.component';
import { HighlightDirective } from '../attribute-directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetail,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
