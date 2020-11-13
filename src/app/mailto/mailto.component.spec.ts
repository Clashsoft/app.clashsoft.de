import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MailtoComponent } from './mailto.component';

describe('MailtoComponent', () => {
  let component: MailtoComponent;
  let fixture: ComponentFixture<MailtoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MailtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
