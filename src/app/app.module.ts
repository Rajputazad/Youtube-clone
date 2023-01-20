import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgProgressModule } from 'ngx-progressbar';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PlayComponent } from './components/play/play.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { SafePipe } from './safe.pipe';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    SidebarComponent,
    HomeComponent,
    ShortsComponent,
    SubscriptionsComponent,
    PlayComponent,
    SafePipe,
    PagenotfoundComponent
  ],
  imports: [
    LoadingBarModule,
    LoadingBarRouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    
  ],
  providers: [LoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
