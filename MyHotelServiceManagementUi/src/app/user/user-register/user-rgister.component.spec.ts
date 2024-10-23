import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRgisterComponent } from './user-rgister.component';

describe('UserRgisterComponent', () => {
  let component: UserRgisterComponent;
  let fixture: ComponentFixture<UserRgisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRgisterComponent]
    });
    fixture = TestBed.createComponent(UserRgisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
