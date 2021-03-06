import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {AreaPage} from '../area/area.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'area',
    component: AreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
