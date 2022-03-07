import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from  '@angular/forms';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ReactiveFormComponent },
      { path: 'reactive-form', component: ReactiveFormComponent }
    ])
  
  ],
  exports: [
    RouterModule], 
  declarations: [
      ReactiveFormComponent], 
  
  bootstrap: [ ReactiveFormComponent ]
} ) 



