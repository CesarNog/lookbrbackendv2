import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Lookbrbackendv2SharedModule } from '../../shared';
import {
    TemperatureService,
    TemperaturePopupService,
    TemperatureComponent,
    TemperatureDetailComponent,
    TemperatureDialogComponent,
    TemperaturePopupComponent,
    TemperatureDeletePopupComponent,
    TemperatureDeleteDialogComponent,
    temperatureRoute,
    temperaturePopupRoute,
} from './';

const ENTITY_STATES = [
    ...temperatureRoute,
    ...temperaturePopupRoute,
];

@NgModule({
    imports: [
        Lookbrbackendv2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TemperatureComponent,
        TemperatureDetailComponent,
        TemperatureDialogComponent,
        TemperatureDeleteDialogComponent,
        TemperaturePopupComponent,
        TemperatureDeletePopupComponent,
    ],
    entryComponents: [
        TemperatureComponent,
        TemperatureDialogComponent,
        TemperaturePopupComponent,
        TemperatureDeleteDialogComponent,
        TemperatureDeletePopupComponent,
    ],
    providers: [
        TemperatureService,
        TemperaturePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2TemperatureModule {}
