import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    ConsultantVoteService,
    ConsultantVotePopupService,
    ConsultantVoteComponent,
    ConsultantVoteDetailComponent,
    ConsultantVoteDialogComponent,
    ConsultantVotePopupComponent,
    ConsultantVoteDeletePopupComponent,
    ConsultantVoteDeleteDialogComponent,
    consultantVoteRoute,
    consultantVotePopupRoute,
} from './';

const ENTITY_STATES = [
    ...consultantVoteRoute,
    ...consultantVotePopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ConsultantVoteComponent,
        ConsultantVoteDetailComponent,
        ConsultantVoteDialogComponent,
        ConsultantVoteDeleteDialogComponent,
        ConsultantVotePopupComponent,
        ConsultantVoteDeletePopupComponent,
    ],
    entryComponents: [
        ConsultantVoteComponent,
        ConsultantVoteDialogComponent,
        ConsultantVotePopupComponent,
        ConsultantVoteDeleteDialogComponent,
        ConsultantVoteDeletePopupComponent,
    ],
    providers: [
        ConsultantVoteService,
        ConsultantVotePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2ConsultantVoteModule {}
