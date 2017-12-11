import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    SocialMediaService,
    SocialMediaPopupService,
    SocialMediaComponent,
    SocialMediaDetailComponent,
    SocialMediaDialogComponent,
    SocialMediaPopupComponent,
    SocialMediaDeletePopupComponent,
    SocialMediaDeleteDialogComponent,
    socialMediaRoute,
    socialMediaPopupRoute,
} from './';

const ENTITY_STATES = [
    ...socialMediaRoute,
    ...socialMediaPopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SocialMediaComponent,
        SocialMediaDetailComponent,
        SocialMediaDialogComponent,
        SocialMediaDeleteDialogComponent,
        SocialMediaPopupComponent,
        SocialMediaDeletePopupComponent,
    ],
    entryComponents: [
        SocialMediaComponent,
        SocialMediaDialogComponent,
        SocialMediaPopupComponent,
        SocialMediaDeleteDialogComponent,
        SocialMediaDeletePopupComponent,
    ],
    providers: [
        SocialMediaService,
        SocialMediaPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2SocialMediaModule {}
