import { Component } from '@angular/core';
import { HttpInterceptor } from './http/http.interceptor';
import { MainService } from './main/main.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
     constructor(private httpInterceptor: HttpInterceptor,
                private mainService: MainService,
                private router: Router) {
    }
}
