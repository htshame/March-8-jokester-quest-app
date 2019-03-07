import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor } from './../http/http.interceptor';

@Injectable()
export class MainService {

    constructor(private http: HttpInterceptor) {
    }

    getAllWindowData(): Observable<any> {
        return this.http.get('api/spu/getAllData', null).map(res => res.json());
    }
}
