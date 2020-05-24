import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    users: any;
  constructor(private UserService: UserService, private global: GlobalService) { }

  ngOnInit() {
      this.getAllUsers();
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = get all user details
     ---------------------------------------------------- */
  getAllUsers() {
      this.UserService.getAllUsers().subscribe(result => {
          if (result.status === 0) {
        this.global.showError(result.message);
              return false;
          }
          this.users = result.result;
      }, error => {
        this.global.showError(error); // Error occured
      });
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = delete user
     ---------------------------------------------------- */
  deleteUserById(id: number, row: any) {
    this.UserService.deleteUserById(id).subscribe(result => {
      if (result.status === 0) {
        this.global.showError(result.message);
        return false;
      }
      const index: number = this.users.indexOf(row);
      this.users.splice(index, 1);
      this.global.showSuccess(result.message);
    }, error => {
        this.global.showError(error); // Error occured
    });
  }

}
