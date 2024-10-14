import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPagePage } from './project-page.page';

describe('ProjectPagePage', () => {
  let component: ProjectPagePage;
  let fixture: ComponentFixture<ProjectPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
