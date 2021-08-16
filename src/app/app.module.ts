import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MissionComponent } from './components/mission/mission.component';
import { MissionsComponent } from './components/missions/missions.component';
import { SelectedMissionComponent } from './components/selected-mission/selected-mission.component';

const appRoutes: Routes = [
  {
    path: '', component: MissionsComponent
  },
  {
    path: ':id', component:SelectedMissionComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    MissionsComponent,
    SelectedMissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
