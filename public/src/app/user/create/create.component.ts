import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    submitted: boolean;
  SelectedStatus: number;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private global: GlobalService) {
      this.submitted = false;
    this.SelectedStatus = 1;
  }

  ngOnInit() {
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = register new user
     ---------------------------------------------------- */
  onSubmit(data: any, isValid: boolean) {
      this.submitted = true;
      if (!isValid) {
          return false;
      }
    this.userService.registerUser(data).subscribe( result => {
      if (result.status === 0) {
        this.global.showError(result.message);
        return false;
      }
      this.router.navigate(['user/list']);
      this.global.showSuccess(result.message);
    }, error => {
        this.global.showError(error); // Error occured
    });
  }

}
