import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableDebugTools } from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

// Bootstrapping application without profiling

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


// Bootstrapping application with profiling enabled

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const applicationRef = moduleRef.injector.get(ApplicationRef);
    const componentRef = applicationRef.components[0];
    // allows to run `ng.profiler.timeChangeDetection();`
    enableDebugTools(componentRef);
  })
  .catch(err => console.log(err));
