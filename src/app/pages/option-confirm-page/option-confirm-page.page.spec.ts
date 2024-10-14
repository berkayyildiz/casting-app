import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionConfirmPagePage } from './option-confirm-page.page';

describe('OptionConfirmPagePage', () => {
  let component: OptionConfirmPagePage;
  let fixture: ComponentFixture<OptionConfirmPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionConfirmPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
