import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',

        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
          {
            path: 'project',
            loadChildren: () =>
              import('../project-page/project-page.module').then(
                (m) => m.ProjectPagePageModule
              ),
          },
        ],
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile-page/profile-page.module').then(
            (m) => m.ProfilePagePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
