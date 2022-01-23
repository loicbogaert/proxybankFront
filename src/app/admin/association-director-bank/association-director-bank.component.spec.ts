import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDirectorBankComponent } from './association-director-bank.component';

describe('AssociationDirectorBankComponent', () => {
  let component: AssociationDirectorBankComponent;
  let fixture: ComponentFixture<AssociationDirectorBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationDirectorBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationDirectorBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
