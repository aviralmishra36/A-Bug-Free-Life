import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcomponentComponent } from './addcomponent/addComponent.component';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

const routes: Routes = [
  { path: 'add-component', component: AddcomponentComponent },
  { path: 'update-component', component:UpdatecomponentComponent  },
  { path: 'delete-component', component:DeletecomponentComponent},
  { path: 'main-menu', component:MainmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
