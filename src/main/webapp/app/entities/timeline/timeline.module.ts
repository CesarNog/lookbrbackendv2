import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    TimelineService,
    TimelinePopupService,
    TimelineComponent,
    TimelineDetailComponent,
    TimelineDialogComponent,
    TimelinePopupComponent,
    TimelineDeletePopupComponent,
    TimelineDeleteDialogComponent,
    timelineRoute,
    timelinePopupRoute,
    TimelineResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...timelineRoute,
    ...timelinePopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TimelineComponent,
        TimelineDetailComponent,
        TimelineDialogComponent,
        TimelineDeleteDialogComponent,
        TimelinePopupComponent,
        TimelineDeletePopupComponent,
    ],
    entryComponents: [
        TimelineComponent,
        TimelineDialogComponent,
        TimelinePopupComponent,
        TimelineDeleteDialogComponent,
        TimelineDeletePopupComponent,
    ],
    providers: [
        TimelineService,
        TimelinePopupService,
        TimelineResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2TimelineModule {}
