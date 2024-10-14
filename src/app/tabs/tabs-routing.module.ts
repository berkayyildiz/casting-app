import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'projects',

        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../pages/projects-gallery-page/projects-gallery-page-routing.module'
              ).then((m) => m.ProjectsGalleryPagePageRoutingModule),
          },
          {
            path: 'project',
            loadChildren: () =>
              import('../pages/project-page/project-page.module').then(
                (m) => m.ProjectPagePageModule
              ),
          },
        ],
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../pages/notifications-page/notifications-page.module'
              ).then((m) => m.NotificationsPagePageModule),
          },
          {
            path: 'option-confirm',
            loadChildren: () =>
              import(
                '../pages/option-confirm-page/option-confirm-page.module'
              ).then((m) => m.OptionConfirmPagePageModule),
          },
        ],
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
        redirectTo: '/tabs/projects',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/projects',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
