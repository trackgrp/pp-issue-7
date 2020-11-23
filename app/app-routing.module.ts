import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular/router'

import { LoginComponent } from '~/pages/login/login.component'

export enum ROUTE_PATH {
  LOGIN = 'login',
}

const routes: Routes = [
  { path: '', redirectTo: '/' + ROUTE_PATH.LOGIN, pathMatch: 'full' },
  { path: ROUTE_PATH.LOGIN, component: LoginComponent, data: { authenticationRequired: false }},
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
