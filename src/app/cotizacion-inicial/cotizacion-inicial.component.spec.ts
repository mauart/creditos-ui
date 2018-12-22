import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionInicialComponent } from './cotizacion-inicial.component';

describe('CotizacionInicialComponent', () => {
  let component: CotizacionInicialComponent;
  let fixture: ComponentFixture<CotizacionInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
