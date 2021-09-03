import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhcognitoappSharedModule } from 'app/shared/shared.module';
import { JhcognitoappCoreModule } from 'app/core/core.module';
import { JhcognitoappAppRoutingModule } from './app-routing.module';
import { JhcognitoappHomeModule } from './home/home.module';
import { JhcognitoappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhcognitoappSharedModule,
    JhcognitoappCoreModule,
    JhcognitoappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhcognitoappEntityModule,
    JhcognitoappAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhcognitoappAppModule {}
