import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { Lookbrbackendv2SharedModule, UserRouteAccessService } from './shared';
import { Lookbrbackendv2AppRoutingModule} from './app-routing.module';
import { Lookbrbackendv2HomeModule } from './home/home.module';
import { Lookbrbackendv2AdminModule } from './admin/admin.module';
import { Lookbrbackendv2AccountModule } from './account/account.module';
import { Lookbrbackendv2EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Lookbrbackendv2AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Lookbrbackendv2SharedModule,
        Lookbrbackendv2HomeModule,
        Lookbrbackendv2AdminModule,
        Lookbrbackendv2AccountModule,
        Lookbrbackendv2EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Lookbrbackendv2AppModule {}
