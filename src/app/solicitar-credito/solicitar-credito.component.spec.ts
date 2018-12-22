import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCreditoComponent } from './solicitar-credito.component';

describe('SolicitarCreditoComponent', () => {
  let component: SolicitarCreditoComponent;
  let fixture: ComponentFixture<SolicitarCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
