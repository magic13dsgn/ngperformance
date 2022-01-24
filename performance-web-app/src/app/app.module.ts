import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerImageComponent } from './components/player-image/player-image.component';
import { PlayerComponent } from './components/player/player.component';
import { GameComponent } from './components/game/game.component';
import { WorkshopProfilingSingleComponent } from './workshops/workshop-profiling-single/workshop-profiling-single.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { WorkshopProfilingManyComponent } from './workshops/workshop-profiling-many/workshop-profiling-many.component';
import { WorkshopGameComponent } from './workshops/workshop-game/workshop-game.component';
import { RandomPlayerComponent } from './components/random-player/random-player.component';
import { ClockSimpleComponent } from './components/clock-simple/clock-simple.component';
import { WorkshopClocksComponent } from './workshops/workshop-clocks/workshop-clocks.component';
import { ClockSmartComponent } from './components/clock-smart/clock-smart.component';
import { ClockDiyComponent } from './components/clock-diy/clock-diy.component';
import { ClockAnalogComponent } from './components/clock-analog/clock-analog.component';
import {MatCardModule} from "@angular/material/card";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PlayerImageComponent,
    PlayerComponent,
    GameComponent,
    WorkshopProfilingSingleComponent,
    WorkshopProfilingManyComponent,
    WorkshopGameComponent,
    RandomPlayerComponent,
    ClockSimpleComponent,
    WorkshopClocksComponent,
    ClockSmartComponent,
    ClockDiyComponent,
    ClockAnalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
