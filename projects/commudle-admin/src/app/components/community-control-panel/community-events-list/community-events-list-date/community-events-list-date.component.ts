import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'projects/shared-models/event.model';
import * as moment from 'moment';

@Component({
  selector: 'app-community-events-list-date',
  templateUrl: './community-events-list-date.component.html',
  styleUrls: ['./community-events-list-date.component.scss']
})
export class CommunityEventsListDateComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: IEvent;

  moment = moment;

  constructor() { }

  ngOnInit() {
  }

}
