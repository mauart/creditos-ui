import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosConveniosTablaComponent } from './productos-convenios-tabla.component';

describe('ProductosConveniosTablaComponent', () => {
  let component: ProductosConveniosTablaComponent;
  let fixture: ComponentFixture<ProductosConveniosTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosConveniosTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosConveniosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
