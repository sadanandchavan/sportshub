import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { StarRatingModule } from 'angular-star-rating';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
