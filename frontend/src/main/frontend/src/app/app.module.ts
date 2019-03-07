import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ToasterModule } from 'angular5-toaster/dist';

import { HttpInterceptor } from './http/http.interceptor';
import { WindowRef } from './environments/window.ref';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { MainService } from './main/main.service';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { CheckpointService } from './checkpoint/checkpoint.service';

export function httpFactory(backend: XHRBackend, options: RequestOptions, window: WindowRef, router: Router) {
    return new HttpInterceptor(backend, options, window, router);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CheckpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToasterModule
  ],
  providers: [
    MainService,
    WindowRef,
    CheckpointService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HttpInterceptor, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, WindowRef, Router]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
