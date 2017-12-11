import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import { Lookbrbackendv2AdminModule } from '../../admin/admin.module';
import {
    LoginService,
    LoginPopupService,
    LoginComponent,
    LoginDetailComponent,
    LoginDialogComponent,
    LoginPopupComponent,
    LoginDeletePopupComponent,
    LoginDeleteDialogComponent,
    loginRoute,
    loginPopupRoute,
} from './';

const ENTITY_STATES = [
    ...loginRoute,
    ...loginPopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        Lookbrbackendv2AdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LoginComponent,
        LoginDetailComponent,
        LoginDialogComponent,
        LoginDeleteDialogComponent,
        LoginPopupComponent,
        LoginDeletePopupComponent,
    ],
    entryComponents: [
        LoginComponent,
        LoginDialogComponent,
        LoginPopupComponent,
        LoginDeleteDialogComponent,
        LoginDeletePopupComponent,
    ],
    providers: [
        LoginService,
        LoginPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2LoginModule {}
