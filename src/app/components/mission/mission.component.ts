import { Component, OnInit, Input} from '@angular/core';
import { Mission } from '../../Mission'

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  @Input() mission!: Mission
  constructor() { }

  ngOnInit(): void {
  }

}
