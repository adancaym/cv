import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiicsaComponent } from './upiicsa.component';

describe('UpiicsaComponent', () => {
  let component: UpiicsaComponent;
  let fixture: ComponentFixture<UpiicsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiicsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiicsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
