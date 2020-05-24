import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { UserRoutes } from './user.routing';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule, NgxDatatableModule, RouterModule.forChild(UserRoutes)],
  declarations: [ListComponent, CreateComponent, UpdateComponent, ViewComponent],
  providers: [UserService]
})
export class UserModule { }
