import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsPagePage } from './notifications-page.page';

describe('NotificationsPagePage', () => {
  let component: NotificationsPagePage;
  let fixture: ComponentFixture<NotificationsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
