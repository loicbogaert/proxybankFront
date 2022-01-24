import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueAuditComponent } from './graphique-audit.component';

describe('GraphiqueAuditComponent', () => {
  let component: GraphiqueAuditComponent;
  let fixture: ComponentFixture<GraphiqueAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiqueAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
