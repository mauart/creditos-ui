import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecotizacionInicialComponent } from './recotizacion-inicial.component';

describe('RecotizacionInicialComponent', () => {
  let component: RecotizacionInicialComponent;
  let fixture: ComponentFixture<RecotizacionInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecotizacionInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecotizacionInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
