import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexConseillerComponent } from './index-conseiller.component';

describe('IndexConseillerComponent', () => {
  let component: IndexConseillerComponent;
  let fixture: ComponentFixture<IndexConseillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexConseillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
