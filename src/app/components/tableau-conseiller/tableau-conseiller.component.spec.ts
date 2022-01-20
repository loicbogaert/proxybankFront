import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauConseillerComponent } from './tableau-conseiller.component';

describe('TableauConseillerComponent', () => {
  let component: TableauConseillerComponent;
  let fixture: ComponentFixture<TableauConseillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauConseillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
