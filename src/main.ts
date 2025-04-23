
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routing.module'; // ✅ Import routes, not module


bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(BrowserModule),
      provideAnimations(),provideRouter(appRoutes),
      provideHttpClient(withInterceptorsFromDi())
  ]
})
.catch(err => console.error(err));
