import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFinancieroComponent } from './reporte-financiero.component';

describe('ReporteFinancieroComponent', () => {
  let component: ReporteFinancieroComponent;
  let fixture: ComponentFixture<ReporteFinancieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteFinancieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
