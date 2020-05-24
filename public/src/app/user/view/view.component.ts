import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    id: string;
    user: any;

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
        this.userService.getUserById(id).subscribe(
          result => {
              if (result.status === 0) {
                  this.global.showError(result.message);
                  return false;
              }
              this.user = result.result;
          }, error => {
            this.global.showError(error); // Error occured
          });
  }

}
