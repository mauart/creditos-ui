import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSolicitudesComponent } from './reporte-solicitudes.component';

describe('ReporteSolicitudesComponent', () => {
  let component: ReporteSolicitudesComponent;
  let fixture: ComponentFixture<ReporteSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
