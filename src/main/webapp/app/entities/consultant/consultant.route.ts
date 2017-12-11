import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ConsultantComponent } from './consultant.component';
import { ConsultantDetailComponent } from './consultant-detail.component';
import { ConsultantPopupComponent } from './consultant-dialog.component';
import { ConsultantDeletePopupComponent } from './consultant-delete-dialog.component';

export const consultantRoute: Routes = [
    {
        path: 'consultant',
        component: ConsultantComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.consultant.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'consultant/:id',
        component: ConsultantDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.consultant.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const consultantPopupRoute: Routes = [
    {
        path: 'consultant-new',
        component: ConsultantPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.consultant.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'consultant/:id/edit',
        component: ConsultantPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.consultant.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'consultant/:id/delete',
        component: ConsultantDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.consultant.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
