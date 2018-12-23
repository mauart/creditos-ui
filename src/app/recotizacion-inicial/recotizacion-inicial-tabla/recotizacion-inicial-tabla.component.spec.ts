import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecotizacionInicialTablaComponent } from './recotizacion-inicial-tabla.component';

describe('RecotizacionInicialTablaComponent', () => {
  let component: RecotizacionInicialTablaComponent;
  let fixture: ComponentFixture<RecotizacionInicialTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecotizacionInicialTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecotizacionInicialTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
