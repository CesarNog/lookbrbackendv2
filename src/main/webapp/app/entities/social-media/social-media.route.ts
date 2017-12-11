import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SocialMediaComponent } from './social-media.component';
import { SocialMediaDetailComponent } from './social-media-detail.component';
import { SocialMediaPopupComponent } from './social-media-dialog.component';
import { SocialMediaDeletePopupComponent } from './social-media-delete-dialog.component';

export const socialMediaRoute: Routes = [
    {
        path: 'social-media',
        component: SocialMediaComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.socialMedia.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'social-media/:id',
        component: SocialMediaDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.socialMedia.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const socialMediaPopupRoute: Routes = [
    {
        path: 'social-media-new',
        component: SocialMediaPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.socialMedia.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'social-media/:id/edit',
        component: SocialMediaPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.socialMedia.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'social-media/:id/delete',
        component: SocialMediaDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lookbrbackendv2App.socialMedia.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
