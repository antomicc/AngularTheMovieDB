import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNzIcons } from './icons-provider';
import { ca_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ca from '@angular/common/locales/ca';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(ca);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient( withFetch()), provideNzIcons(), provideNzI18n(ca_ES), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()]
};
