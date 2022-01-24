import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenneCompteCourrantComponent } from './moyenne-compte-courrant.component';

describe('MoyenneCompteCourrantComponent', () => {
  let component: MoyenneCompteCourrantComponent;
  let fixture: ComponentFixture<MoyenneCompteCourrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenneCompteCourrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyenneCompteCourrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
