import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpnComponent } from './ipn.component';

describe('IpnComponent', () => {
  let component: IpnComponent;
  let fixture: ComponentFixture<IpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
