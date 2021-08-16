import { Component, OnInit } from '@angular/core';
import { Mission } from '../../Mission'
import { MissionsServicesService } from '../../services/missions-services.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missions: any 
  missionsHttp: string = 'https://api.spacexdata.com/v3/missions'

  constructor(private missionsService: MissionsServicesService) {}

  ngOnInit (): void {
    this.missionsService.getMissions().subscribe(missions => {
      this.missions = missions
    })  
  }
}
