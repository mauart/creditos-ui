import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionInicialTablaComponent } from './cotizacion-inicial-tabla.component';

describe('CotizacionInicialTablaComponent', () => {
  let component: CotizacionInicialTablaComponent;
  let fixture: ComponentFixture<CotizacionInicialTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionInicialTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionInicialTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
