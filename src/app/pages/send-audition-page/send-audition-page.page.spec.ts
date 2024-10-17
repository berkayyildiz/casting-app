import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendAuditionPagePage } from './send-audition-page.page';

describe('SendAuditionPagePage', () => {
  let component: SendAuditionPagePage;
  let fixture: ComponentFixture<SendAuditionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAuditionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
