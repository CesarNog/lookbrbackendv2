import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    CommentService,
    CommentPopupService,
    CommentComponent,
    CommentDetailComponent,
    CommentDialogComponent,
    CommentPopupComponent,
    CommentDeletePopupComponent,
    CommentDeleteDialogComponent,
    commentRoute,
    commentPopupRoute,
} from './';

const ENTITY_STATES = [
    ...commentRoute,
    ...commentPopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CommentComponent,
        CommentDetailComponent,
        CommentDialogComponent,
        CommentDeleteDialogComponent,
        CommentPopupComponent,
        CommentDeletePopupComponent,
    ],
    entryComponents: [
        CommentComponent,
        CommentDialogComponent,
        CommentPopupComponent,
        CommentDeleteDialogComponent,
        CommentDeletePopupComponent,
    ],
    providers: [
        CommentService,
        CommentPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2CommentModule {}
