import { Injectable } from '@angular/core';
import { Mission } from '../Mission'
import { WantedMission } from '../wantedMission';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MissionsServicesService {
  private apiUrl = 'https://api.spacexdata.com/v3/missions'

  constructor(private missionsApi: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.missionsApi.get<Mission[]>(this.apiUrl)
  }

  getMission(id: string): Observable<WantedMission> {
    return this.missionsApi.get<WantedMission>(this.apiUrl + '/' + id)
  }
}
