import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SignupComponent } from './signup.component';
import { SignupDetailComponent } from './signup-detail.component';
import { SignupPopupComponent } from './signup-dialog.component';
import { SignupDeletePopupComponent } from './signup-delete-dialog.component';

export const signupRoute: Routes = [
    {
        path: 'signup',
        component: SignupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.signup.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'signup/:id',
        component: SignupDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.signup.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const signupPopupRoute: Routes = [
    {
        path: 'signup-new',
        component: SignupPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.signup.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'signup/:id/edit',
        component: SignupPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.signup.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'signup/:id/delete',
        component: SignupDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.signup.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
