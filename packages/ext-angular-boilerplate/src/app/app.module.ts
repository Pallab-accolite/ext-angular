declare var Ext: any
import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

import {ExtAngularModernModule} from './ext-angular-modern-prod/ext-angular-modern.module'

 // import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { ExtAngularBootstrapService } from './ext-angular/ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from './ext-angular/ext-angular-bootstrap.component'

import { AppComponent } from './app.component'
import { HomeComponent } from './Home/home.component'
import { AboutComponent } from './About/about.component'
import { NavMenuComponent } from './NavMenu/navmenu.component'

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes)

@NgModule({
  imports:         [BrowserModule, ExtAngularModernModule, routingModule],
  declarations:    [ExtAngularBootstrapComponent, AppComponent, HomeComponent, AboutComponent, NavMenuComponent],
  providers:       [ExtAngularBootstrapService],
  entryComponents: [AppComponent],
  bootstrap:       [ExtAngularBootstrapComponent]
})
export class AppModule {
  constructor(extAngularService : ExtAngularBootstrapService) {
    extAngularService.setBootStrapComponent(AppComponent)
  }
}
