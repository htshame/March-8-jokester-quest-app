import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Headers, Request, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { environment } from '../environments/environment';
import { WindowRef } from '../environments/window.ref';
import { Router } from '@angular/router';

// this is pretty much useless.
@Injectable()
export class HttpInterceptor extends Http {
    window: any;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, window: WindowRef, private router: Router) {
        super(backend, defaultOptions);
        this.window = window;
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.beforeRequest();
        return super.get(this.getFullUrl(url), this.getRequestOptions(this.stripTagsUrlSearchParams(null), options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    post(url: string, params?: string): Observable<any> {
        this.beforeRequest();
        return super.post(this.getFullUrl(url), params)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    private getRequestOptions(params?: URLSearchParams, options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers({
                'Content-Type': 'application/json'
            });
        }
        if (options.search == null) {
            options.search = params;
        }
        return options;
    }

    private postRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers({
                'Content-Type': 'application/json'
            });
        }
        return options;
    }

    private getFullUrl(url: string): string {
        return environment.apiEndpoint + url;
    }

    private beforeRequest(): void {
    }

    private afterRequest(): void {
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
    }

    private onError(error: any): void {
        if (error.status == 401) {
            if (document.getElementsByClassName('change-width-if-sidebar-is-open').length > 0) {
                document.getElementById('logo').click();
            }
            this.router.navigate(['/auth']);
        }
    }

    private onFinally(): void {
        this.afterRequest();
    }

    private stripTagsString(params: string): string {
        if (params) {
            return params.replace(/(<([^>]+)>)/ig, '').replace(/[<>/'`\\|]/gi, '');
        }
        return null;
    }

    private stripTagsUrlSearchParams(params: URLSearchParams): URLSearchParams {
        if (params) {
            let cleanParams: URLSearchParams = new URLSearchParams();
            if (params.hasOwnProperty('paramsMap')) {
                params['paramsMap'].forEach((value: string[], key: string) => {
                    let cleanParam: string = null;
                    for (let i = 0; i < value.length; i++) {
                        cleanParam = this.stripTagsString(value[i]);
                    }
                    if (key && cleanParam) {
                        cleanParams.set(key, cleanParam);
                    }
                });
            }
            return cleanParams;
        }
        return null;
    }
}
