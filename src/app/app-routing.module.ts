import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../app/home/home.module';
import { ContentComponentComponent } from '../app/shared/content-component/content-component.component';
import { content } from './shared/content-component/content-route';

const routes: Routes = [
  {
    path: '',
    component: ContentComponentComponent,
    children: content,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
