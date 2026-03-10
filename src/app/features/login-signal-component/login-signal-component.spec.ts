import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignalComponent } from './login-signal-component';

describe('LoginSignalComponent', () => {
  let component: LoginSignalComponent;
  let fixture: ComponentFixture<LoginSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
