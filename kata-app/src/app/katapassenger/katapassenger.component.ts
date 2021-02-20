import { Component, OnInit, Input } from '@angular/core';
import { User } from '../kata.service';

@Component({
  selector: 'app-katapassenger',
  templateUrl: './katapassenger.component.html',
  styleUrls: ['./katapassenger.component.scss']
})
export class KatapassengerComponent implements OnInit {
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
