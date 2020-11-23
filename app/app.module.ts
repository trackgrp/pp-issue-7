import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular/nativescript.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { DropDownModule } from '@proplugins/nativescript-drop-down/angular'
import { LoginComponent } from './pages/login/login.component'

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    DropDownModule,
  ],
  exports: [
  ],
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
  providers: [
  ]
})
export class AppModule { }

