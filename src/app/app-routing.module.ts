import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWellComponent } from './add-well/add-well.component';
import { UsersComponent } from './users/users.component';
import { WellListComponent } from './well-list/well-list.component';

const routes: Routes = [
  {path:'', component:WellListComponent},
  {path:'addwell', component:AddWellComponent},
  // {path:'welllist', component:WellListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
