
 import { enableProdMode, importProvidersFrom } from '@angular/core';
 import { bootstrapApplication } from '@angular/platform-browser';
 import { AppComponent } from './app/app.component';
 import { RouterModule } from '@angular/router';
import { routes } from './app/app.routing';
import { environment } from './environment';



if (environment.production) {
	enableProdMode();
  }
 bootstrapApplication(AppComponent, {
   providers: [
     importProvidersFrom(RouterModule.forRoot(routes))
   ]
 });
 