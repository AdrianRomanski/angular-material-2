import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
        template: `
            <h1 mat-dialog-title>Are you sure?</h1>
            <mat-dialog-content>
                <p>You already got {{this.data.progress}}%</p>
            </mat-dialog-content>
            <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Yes</button>
                <button mat-button [mat-dialog-close]="false">No</button>
            </mat-dialog-actions>
        `,
        selector: 'app-stop-training'
    }
)
export class StopTrainingComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    }
}
