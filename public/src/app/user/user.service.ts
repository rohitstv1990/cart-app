import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalService } from '../global.service';


@Injectable()
export class UserService {

  constructor(private http: Http, private global: GlobalService) {
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = get all the user contacts
     ---------------------------------------------------- */
  getAllUsers() {
      return this.http
                  .get(this.global.url + 'users', this.global.getHeaders())
          .map(Response => Response.json())
          .catch(this.global.handleError);
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = register/create new user contact
     ---------------------------------------------------- */
  registerUser(data: any) {
    console.log(data);
    return this.http
                .post(this.global.url + 'users', data, this.global.getHeaders())
                .map(Response => Response.json())
                .catch(this.global.handleError);
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = get single user detail
     ---------------------------------------------------- */
  getUserById(id: string) {
    return this.http
                .get(this.global.url + 'user/' + id, this.global.getHeaders())
                .map(Response => Response.json())
                .catch(this.global.handleError);
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = remove user
     ---------------------------------------------------- */
  deleteUserById(id: number) {
    return this.http
                .delete(this.global.url + 'user/' + id, this.global.getHeaders())
                .map(Response => Response.json())
                .catch(this.global.handleError);
  }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = update user
     ---------------------------------------------------- */
  updateUser(id: string, data: any) {
    return this.http
                  .put(this.global.url + 'user/' + id + '/update', data, this.global.getHeaders())
                  .map(Response => Response.json())
                  .catch(this.global.handleError);
  }

}
