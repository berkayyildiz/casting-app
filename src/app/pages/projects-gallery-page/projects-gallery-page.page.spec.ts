import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsGalleryPagePage } from './projects-gallery-page.page';

describe('ProjectsGalleryPagePage', () => {
  let component: ProjectsGalleryPagePage;
  let fixture: ComponentFixture<ProjectsGalleryPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsGalleryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
