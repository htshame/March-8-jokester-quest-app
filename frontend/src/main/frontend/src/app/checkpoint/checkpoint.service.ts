import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor } from '../http/http.interceptor';

@Injectable()
export class CheckpointService {

    constructor(private http: HttpInterceptor) {
    }

    start(): Observable<any> {
        return this.http.get('/march8/checkpoints/start').map(res => res.json());
    }

    submitAnswer(data): Observable<any> {
        return this.http.post('/march8/checkpoints/' + data.nextCheckpointId, data).map(res => res.json());
    }
}
