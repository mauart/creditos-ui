import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSolicitantesComponent } from './reporte-solicitantes.component';

describe('ReporteSolicitantesComponent', () => {
  let component: ReporteSolicitantesComponent;
  let fixture: ComponentFixture<ReporteSolicitantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSolicitantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSolicitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
