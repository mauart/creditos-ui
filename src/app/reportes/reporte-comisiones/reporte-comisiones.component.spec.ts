import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteComisionesComponent } from './reporte-comisiones.component';

describe('ReporteComisionesComponent', () => {
  let component: ReporteComisionesComponent;
  let fixture: ComponentFixture<ReporteComisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteComisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
