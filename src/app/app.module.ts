import { InterceptorInterceptor } from './interceptor.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";

import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule,
    ProductModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor
    ,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
