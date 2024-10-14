import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalDetailsEditPagePage } from './personal-details-edit-page.page';

describe('PersonalDetailsEditPagePage', () => {
  let component: PersonalDetailsEditPagePage;
  let fixture: ComponentFixture<PersonalDetailsEditPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsEditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
