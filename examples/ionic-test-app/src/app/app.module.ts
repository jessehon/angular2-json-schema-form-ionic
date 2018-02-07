import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { App } from './app.component';
import { RenderSchemaPage } from '../pages/render-schema/render-schema';
import { JsonSchemaFormModule } from 'angular2-json-schema-form';
import { IonicFrameworkModule } from 'angular2-json-schema-form-ionic';

@NgModule({
  declarations: [
    App,
    RenderSchemaPage
  ],
  imports: [
    BrowserModule,
    IonicFrameworkModule,
    JsonSchemaFormModule.forRoot(IonicFrameworkModule),
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    RenderSchemaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
