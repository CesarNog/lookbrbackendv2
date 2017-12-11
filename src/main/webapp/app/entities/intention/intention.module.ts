import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    IntentionService,
    IntentionPopupService,
    IntentionComponent,
    IntentionDetailComponent,
    IntentionDialogComponent,
    IntentionPopupComponent,
    IntentionDeletePopupComponent,
    IntentionDeleteDialogComponent,
    intentionRoute,
    intentionPopupRoute,
} from './';

const ENTITY_STATES = [
    ...intentionRoute,
    ...intentionPopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        IntentionComponent,
        IntentionDetailComponent,
        IntentionDialogComponent,
        IntentionDeleteDialogComponent,
        IntentionPopupComponent,
        IntentionDeletePopupComponent,
    ],
    entryComponents: [
        IntentionComponent,
        IntentionDialogComponent,
        IntentionPopupComponent,
        IntentionDeleteDialogComponent,
        IntentionDeletePopupComponent,
    ],
    providers: [
        IntentionService,
        IntentionPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2IntentionModule {}
