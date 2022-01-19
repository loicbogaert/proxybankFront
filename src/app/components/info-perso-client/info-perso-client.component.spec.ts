import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersoClientComponent } from './info-perso-client.component';

describe('InfoPersoClientComponent', () => {
  let component: InfoPersoClientComponent;
  let fixture: ComponentFixture<InfoPersoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersoClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPersoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
