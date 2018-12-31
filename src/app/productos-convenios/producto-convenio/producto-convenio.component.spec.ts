import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoConvenioComponent } from './producto-convenio.component';

describe('ProductoConvenioComponent', () => {
  let component: ProductoConvenioComponent;
  let fixture: ComponentFixture<ProductoConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
