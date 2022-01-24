import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComptesClientComponent } from './info-comptes-client.component';

describe('InfoComptesClientComponent', () => {
  let component: InfoComptesClientComponent;
  let fixture: ComponentFixture<InfoComptesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComptesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComptesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
