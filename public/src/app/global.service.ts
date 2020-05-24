import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GlobalService {

      url: string;
      constructor(private toastr: ToastrService) {
          this.url = '/api/';
      }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = show success message
     ---------------------------------------------------- */
    public getHeaders() {
          const headers = new Headers({ 'Content-Type': 'application/json' });
          return new RequestOptions({headers: headers});
    }

  	/* = Author: Parag Khalas, Update Date: 05-10-2017
     = handle the error
     ---------------------------------------------------- */
    public handleError(error: any): Observable<any> {
      return Observable.throw(new Error(`${ error.status } $ { error.statusText }`));
    }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = show success message
     ---------------------------------------------------- */
     public showSuccess(message: string) {
       this.toastr.success(message, 'Success!');
     }

  /* = Author: Parag Khalas, Update Date: 05-10-2017
     = show error notification
     ---------------------------------------------------- */
     public showError(message: string) {
       this.toastr.error(message, 'Oops!');
     }

}
