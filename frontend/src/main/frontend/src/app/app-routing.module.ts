import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent
    }, {
        path: 'checkpoints',
        component: CheckpointComponent
    }, {
        path: '**',
        redirectTo: 'main'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {};
