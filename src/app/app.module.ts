import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import  { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CopyTextDirectiveDirective } from './copy-text-directive.directive';
import { HostListenerDirective } from './host-listener.directive';
import { HostBindingDirective } from './host-binding.directive';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeePipe } from './employee.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,    
    CustomDirectiveDirective, 
    CopyTextDirectiveDirective, 
    HostListenerDirective, 
    HostBindingDirective, 
    EmployeeDetailsComponent, 
    EmployeePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
