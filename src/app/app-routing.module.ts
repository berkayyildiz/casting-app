import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'project-page',
    loadChildren: () =>
      import('./pages/project-page/project-page.module').then(
        (m) => m.ProjectPagePageModule
      ),
  },
  {
    path: 'profile-page',
    loadChildren: () =>
      import('./pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePagePageModule
      ),
  },
  {
    path: 'projects-gallery-page',
    loadChildren: () =>
      import('./pages/projects-gallery-page/projects-gallery-page.module').then(
        (m) => m.ProjectsGalleryPagePageModule
      ),
  },
  {
    path: 'option-confirm-page',
    loadChildren: () =>
      import('./pages/option-confirm-page/option-confirm-page.module').then(
        (m) => m.OptionConfirmPagePageModule
      ),
  },
  {
    path: 'notifications-page',
    loadChildren: () =>
      import('./pages/notifications-page/notifications-page.module').then(
        (m) => m.NotificationsPagePageModule
      ),
  },
  {
    path: 'personal-details-edit-page',
    loadChildren: () =>
      import(
        './pages/personal-details-edit-page/personal-details-edit-page.module'
      ).then((m) => m.PersonalDetailsEditPagePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
