import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeNeededComponent } from './employe-needed.component';

describe('EmployeNeededComponent', () => {
  let component: EmployeNeededComponent;
  let fixture: ComponentFixture<EmployeNeededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeNeededComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
