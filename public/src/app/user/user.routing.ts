import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

export const UserRoutes: Routes = [
  {
      path: '',
      children: [{
            path: 'list',
            component: ListComponent
      },
      {
          path: 'create',
          component: CreateComponent
      }, {
          path: 'update/:id',
          component: UpdateComponent
      },
      {
          path: 'view/:id',
          component: ViewComponent
      }]
}
];
