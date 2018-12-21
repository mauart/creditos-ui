import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosConveniosComponent } from './productos-convenios.component';

describe('ProductosConveniosComponent', () => {
  let component: ProductosConveniosComponent;
  let fixture: ComponentFixture<ProductosConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
