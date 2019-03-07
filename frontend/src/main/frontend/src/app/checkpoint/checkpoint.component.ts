import { Component } from '@angular/core';
import { CheckpointService } from './checkpoint.service';
import { ToasterService } from 'angular5-toaster/dist';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'checkpoint',
    templateUrl: './checkpoint.component.html',
    styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent {
    constructor(private checkpointService: CheckpointService, private toasterService: ToasterService,
                private router: Router) {
        this.initialCheckpoint();
    }

    public task: any;
    public nextCheckpointId: any;
    public checkpointCode: any;
    public isLast: any;

    initialCheckpoint() {
        this.checkpointService.start().subscribe(data => {
            this.task = data.nextCheckpoint;
            this.nextCheckpointId = data.nextId;
            this.isLast = false;
        });
    }

    nextStep() {
        let data: any = {};
        if (this.checkpointCode) {
            data.checkpointCode = this.checkpointCode.trim();
        }
        data.nextCheckpointId = this.nextCheckpointId;
        this.checkpointService.submitAnswer(data).subscribe(data => {
            this.task = data.nextCheckpoint;
            this.nextCheckpointId = data.nextId;
            this.isLast = data.isLast;
            this.checkpointCode = null;
            if (this.isLast) {
                this.playApplauseSound();
            } else {
                this.playSuccessSound();
            }
            this.toasterService.pop('success', 'Ура!', 'Пароль правильный!');
        }, err => {
            this.playWrongSound();
            this.toasterService.pop('error', 'Некорректный пароль!', 'Попробуйте снова.');
            this.checkpointCode = null;
        });
    }

    back() {
        this.playSheepSound();
        this.router.navigate(['main']);
    }

    iWill() {
        this.playApplauseSound();
        this.toasterService.pop('success', 'Умница!', null);
    }

    playApplauseSound() {
        /*let audio = new Audio();
        audio.src = "../../assets/applause4.wav";
        audio.load();
        audio.play();*/
    }

    playSuccessSound() {
        /*let audio = new Audio();
        audio.src = "../../assets/small-bell-ring-01a.wav";
        audio.load();
        audio.play();*/
    }

    playSheepSound() {
        /*let audio = new Audio();
        audio.src = "../../assets/sheep-bah1.wav";
        audio.load();
        audio.play();*/
    }

    playWrongSound() {
        /*let audio = new Audio();
        audio.src = "../../assets/wrong-answer.wav";
        audio.load();
        audio.play();*/
    }
}
