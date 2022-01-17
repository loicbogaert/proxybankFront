import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDirecteurComponent } from './index-directeur.component';

describe('IndexDirecteurComponent', () => {
  let component: IndexDirecteurComponent;
  let fixture: ComponentFixture<IndexDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDirecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
