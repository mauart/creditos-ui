import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDeudaComponent } from './compra-deuda.component';

describe('CompraDeudaComponent', () => {
  let component: CompraDeudaComponent;
  let fixture: ComponentFixture<CompraDeudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraDeudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
