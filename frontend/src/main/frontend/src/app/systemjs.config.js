(function (global) {
    System.config({
        paths: {
            'npm:': 'libs/'
        },
        map: {
            app: 'app',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',

            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-growl/service': 'npm:ng2-growl/growl.module.js',
            'ng2-growl': 'npm:ng2-growl/growl.service.js',
            'ng2-aside': 'npm:ng2-aside/index.js',
            'ng2-accordion': 'npm:ng2-accordion/index.js',
            'ng2-modal-dialog/modal.module': 'npm:ng2-modal-dialog/modal.module.js',
            'ng2-bootstrap-modal': 'npm:ng2-bootstrap-modal/index.js',
            'ngx-pagination': 'npm:ngx-pagination/dist/ngx-pagination.umd.js',
            'file-saver': 'npm:file-saver/FileSaver.js',
            'angular2-text-mask': 'npm:angular2-text-mask/dist/angular2TextMask.js',
            'text-mask-core/dist/textMaskCore': 'npm:text-mask-core/dist/textMaskCore.js',
            'time-ago-pipe': 'npm:time-ago-pipe/index.js',
            'ng2-validation': 'npm:ng2-validation/bundles/ng2-validation.umd.js',
            'libphonenumber-js': 'npm:libphonenumber-js/libphonenumber-js.js'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
