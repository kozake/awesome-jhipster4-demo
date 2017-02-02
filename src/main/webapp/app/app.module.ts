import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AwesomeJhipster4DemoSharedModule, UserRouteAccessService } from './shared';
import { AwesomeJhipster4DemoAdminModule } from './admin/admin.module';
import { AwesomeJhipster4DemoAccountModule } from './account/account.module';
import { AwesomeJhipster4DemoEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { HomeComponent } from './home';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

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
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AwesomeJhipster4DemoSharedModule,
        AwesomeJhipster4DemoAdminModule,
        AwesomeJhipster4DemoAccountModule,
        AwesomeJhipster4DemoEntityModule
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class AwesomeJhipster4DemoAppModule {}
