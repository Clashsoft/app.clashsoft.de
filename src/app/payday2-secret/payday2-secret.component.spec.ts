import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Payday2SecretComponent } from './payday2-secret.component';

describe('Payday2SecretComponent', () => {
  let component: Payday2SecretComponent;
  let fixture: ComponentFixture<Payday2SecretComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Payday2SecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Payday2SecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
