import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { IntentionComponent } from './intention.component';
import { IntentionDetailComponent } from './intention-detail.component';
import { IntentionPopupComponent } from './intention-dialog.component';
import { IntentionDeletePopupComponent } from './intention-delete-dialog.component';

export const intentionRoute: Routes = [
    {
        path: 'intention',
        component: IntentionComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.intention.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'intention/:id',
        component: IntentionDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.intention.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const intentionPopupRoute: Routes = [
    {
        path: 'intention-new',
        component: IntentionPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.intention.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'intention/:id/edit',
        component: IntentionPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.intention.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'intention/:id/delete',
        component: IntentionDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.intention.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
