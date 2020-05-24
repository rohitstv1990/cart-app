import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    id: string;
    dbFirstname: string;
    dbLastname: string;
    dbMobile: string;
    dbEmail: string;
    SelectedStatus: number;
    submitted: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private global: GlobalService) {
      this.route.params.subscribe(params => {
          this.id = params['id'];
          this.getUserById(this.id);
      });
  }

  ngOnInit() {
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = get user detail
     ---------------------------------------------------- */
  getUserById(id: string) {
      this.userService.getUserById(id).subscribe(result => {
          if (result.status === 0) {
              this.global.showError(result.message);
              return false;
          }
          this.dbFirstname = result.result.firstname;
          this.dbLastname = result.result.lastname;
          this.dbEmail = result.result.email;
          this.dbMobile = result.result.mobile;
      this.SelectedStatus = result.result.status;
      }, error => {
          this.global.showError(error); // Error occured
      });
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = update user
     ---------------------------------------------------- */
  onSubmit(data: any, isValid: boolean) {
      this.submitted = true;
      if (!isValid) {
          return false;
      }
      this.userService.updateUser(this.id, data).subscribe( result => {
        if (result.status === 0) {
          const errorList = [];
          for (let i = 0; i < result.result.length; i++) {
               errorList.push(result.result[i].msg);
          }
          this.global.showError(errorList.toString());
          return false;
      }
      this.router.navigate(['user/list']);
      this.global.showSuccess(result.message);
    }, error => {
        this.global.showError(error); // Error occured
    });
  }
}
