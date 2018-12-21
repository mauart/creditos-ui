import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesTablaComponent } from './solicitantes-tabla.component';

describe('SolicitantesTablaComponent', () => {
  let component: SolicitantesTablaComponent;
  let fixture: ComponentFixture<SolicitantesTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitantesTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitantesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
