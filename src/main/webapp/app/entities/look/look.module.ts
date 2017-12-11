import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    LookService,
    LookPopupService,
    LookComponent,
    LookDetailComponent,
    LookDialogComponent,
    LookPopupComponent,
    LookDeletePopupComponent,
    LookDeleteDialogComponent,
    lookRoute,
    lookPopupRoute,
} from './';

const ENTITY_STATES = [
    ...lookRoute,
    ...lookPopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LookComponent,
        LookDetailComponent,
        LookDialogComponent,
        LookDeleteDialogComponent,
        LookPopupComponent,
        LookDeletePopupComponent,
    ],
    entryComponents: [
        LookComponent,
        LookDialogComponent,
        LookPopupComponent,
        LookDeleteDialogComponent,
        LookDeletePopupComponent,
    ],
    providers: [
        LookService,
        LookPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2LookModule {}
