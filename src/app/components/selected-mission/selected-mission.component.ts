import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Mission } from 'src/app/Mission';
import { WantedMission } from 'src/app/wantedMission';
import { MissionsServicesService } from 'src/app/services/missions-services.service';


@Component({
  selector: 'app-selected-mission',
  templateUrl: './selected-mission.component.html',
  styleUrls: ['./selected-mission.component.css']
})
export class SelectedMissionComponent implements OnInit {
  mission!: WantedMission
  mission$: Observable<number> | undefined
  id!: string
  missionApi = 'https://api.spacexdata.com/v3/missions'

  constructor(private route: ActivatedRoute, private service: MissionsServicesService) { }

  ngOnInit(): void {
   this.id = String(this.route.snapshot.paramMap.get('id'))
    this.service.getMission(this.id).subscribe(mission => this.mission = mission)
  }

}
