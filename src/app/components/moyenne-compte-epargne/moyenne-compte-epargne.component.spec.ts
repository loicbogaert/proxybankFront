import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenneCompteEpargneComponent } from './moyenne-compte-epargne.component';

describe('MoyenneCompteEpargneComponent', () => {
  let component: MoyenneCompteEpargneComponent;
  let fixture: ComponentFixture<MoyenneCompteEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenneCompteEpargneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyenneCompteEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
