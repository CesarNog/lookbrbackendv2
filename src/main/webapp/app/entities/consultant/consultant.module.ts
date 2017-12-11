import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    ConsultantService,
    ConsultantPopupService,
    ConsultantComponent,
    ConsultantDetailComponent,
    ConsultantDialogComponent,
    ConsultantPopupComponent,
    ConsultantDeletePopupComponent,
    ConsultantDeleteDialogComponent,
    consultantRoute,
    consultantPopupRoute,
} from './';

const ENTITY_STATES = [
    ...consultantRoute,
    ...consultantPopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ConsultantComponent,
        ConsultantDetailComponent,
        ConsultantDialogComponent,
        ConsultantDeleteDialogComponent,
        ConsultantPopupComponent,
        ConsultantDeletePopupComponent,
    ],
    entryComponents: [
        ConsultantComponent,
        ConsultantDialogComponent,
        ConsultantPopupComponent,
        ConsultantDeleteDialogComponent,
        ConsultantDeletePopupComponent,
    ],
    providers: [
        ConsultantService,
        ConsultantPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2ConsultantModule {}
