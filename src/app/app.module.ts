import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { StudentDetail } from './student//studentDetail.component';
import { HighlightDirective } from '../attribute-directives/highlight.directive';
import { UnlessDirective } from '../structural-directives/unless.directive';
import { StudentServer } from './student/student.server';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetail,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ StudentServer ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
