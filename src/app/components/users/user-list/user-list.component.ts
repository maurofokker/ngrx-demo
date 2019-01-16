import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];

  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }

}
